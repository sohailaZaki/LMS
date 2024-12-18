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
    public class GetStudentAssignmentsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public GetStudentAssignmentsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet("student/{studentId}/assignments")]
        public async Task<IActionResult> GetStudentAssignments(int studentId)
        {
            // التحقق من وجود الطالب
            var studentExists = await _context.Users.AnyAsync(u => u.Id == studentId);
            if (!studentExists)
            {
                return NotFound(new { Message = "Student not found." });
            }

            // استرجاع المهام الخاصة بالطالب مع ملف التحميل والبيانات الأخرى
            var assignments = await _context.StudentCourse
                                             .Where(sc => sc.StudentID == studentId)
                                             .Include(sc => sc.Course)
                                             .ThenInclude(c => c.Assignments)
                                             .SelectMany(sc => sc.Course.Assignments.Select(a => new
                                             {
                                                 AssignmentName = a.Name,
                                                 Deadline = a.DeadLine,
                                                 CourseName = sc.Course.Name,
                                                 Filepath = a.filepath // إضافة filepath
                                             }))
                                             .ToListAsync();

            // التحقق من وجود المهام
            if (!assignments.Any())
            {
                return Ok(new { Message = "No assignments found for this student." });
            }
            
            return Ok(assignments);
        }
    }
}
