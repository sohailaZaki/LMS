using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LMS.Data;
using LMS.Data.Models;
using System.Linq;
using System.Threading.Tasks;

namespace LMS.Controllers.Student
{
    [Route("api/[controller]")]
    [ApiController]
    public class GetStudentCoursesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public GetStudentCoursesController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet("student/{studentId}/courses")]
        public async Task<IActionResult> GetStudentCourses(int studentId)
        {
            // تحقق من وجود الطالب
            var studentExists = await _context.Users.AnyAsync(u => u.Id == studentId);
            if (!studentExists)
            {
                return NotFound(new { Message = "The student does not exist." });
            }

            // جلب الدورات التي سجل فيها الطالب
            var studentCourses = await _context.StudentCourse
                                               .Where(sc => sc.StudentID == studentId)
                                               .Include(sc => sc.Course)                    
                                                   .ThenInclude(c => c.CourseMaterial)    
                                               .Include(sc => sc.Course.AssessmentCriteria) 
                                               .ToListAsync();

            if (!studentCourses.Any())
            {
                return Ok(new { Message = "This student is not enrolled in any courses." });
            }

            // تنسيق بيانات الدورات
            var courses = studentCourses.Select(sc => new
            {
                CourseID = sc.Course.ID,
                CourseName = sc.Course.Name,
                CourseDescription = sc.Course.Description,
                CourseImage = sc.Course.ImgPath,
                CourseMaterials = sc.Course.CourseMaterial?.Select(cm => new
                {
                    MaterialID = cm.id,
                    MaterialName = cm.Name,
                    MaterialCategory = cm.Category,
                    MaterialFilePath = cm.FilePath
                }).ToList(),
                AssessmentCriteria = sc.Course.AssessmentCriteria != null
                    ? new
                    {
                        Theoretical = sc.Course.AssessmentCriteria.Theoretical,
                        Practical = sc.Course.AssessmentCriteria.Practical,
                        Yearwork = sc.Course.AssessmentCriteria.Yearwork,
                        Midterm = sc.Course.AssessmentCriteria.Midterm,
                        Quizzes = sc.Course.AssessmentCriteria.Quizzes
                    }
                    : null // إذا لم توجد معايير تقييم
            }).ToList();

            return Ok(courses);
        }
    }
}
