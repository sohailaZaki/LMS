using LMS.Data;
using LMS.Data.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LMS.Controllers.Instructor
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
    public StudentsController(AppDbContext db) {
        _db = db;

        }
        [HttpGet("{courseId}")]
        public async Task<IActionResult> GetStudentsinCourse(int courseId)
        {
            User studentsinCourse = new User();
            var studentsCourses = await _db.StudentCourse.ToListAsync();
            var studentsinSystem = await _db.Users.ToListAsync();
            List<StudentCourse> studentsGrades = new List<StudentCourse>();
            foreach (var item in studentsCourses )
            {
                if (item.CourseID == courseId)                    //this student registered in this course 
                {
                     studentsinCourse =  studentsinSystem.Where(u => u.Id == item.StudentID).ToList().First() ;
                    //item.studentName = studentsinCourse.FirstName + " " + studentsinCourse.LastName;
                    _db.Update(item);
                    _db.SaveChanges();
                    studentsGrades.Add((item));
       
                }

            }
          
                    if (studentsGrades.Count > 0)
            {
                return Ok(studentsGrades);

            }
            return BadRequest("there isn't any Students in this Course");


        }
        private readonly AppDbContext _db;
    }
    

}
