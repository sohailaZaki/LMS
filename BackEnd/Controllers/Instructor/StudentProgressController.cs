using LMS.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LMS.Controllers.Instructor
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentProgressController : ControllerBase
        
    {
        public StudentProgressController(AppDbContext db)
        {
            _db = db;   
        }
        [HttpGet ("{courseId}")]
        public async Task<IActionResult> getStudentsMontiring(int courseId)
        {
            var assigments = _db.Assignments.Where(a=>a.CourseID==courseId).ToList();  //get all assigments in course
            var students = _db.StudentCourse.Where(u => u.CourseID == courseId).ToList();    //get all students assigned in this course
            Dictionary<int,int>studentSubmissions = new Dictionary<int,int>();
            foreach (var item in students)
            {
                var assigmentsSubmittes = _db.AssignmentSubmissions.Where(s => s.StudentID == item.StudentID).ToList();
                if (assigmentsSubmittes.Count()>0)
                {
                    double studentProgress =Math.Ceiling (((float)assigmentsSubmittes.Count() / assigments.Count())*100);
                   if(item.StudentID != null)
                    {

                    studentSubmissions.Add((int)item.StudentID, (int)studentProgress);
                    }
                }
             
            }
            if (studentSubmissions.Count() > 0)
            {
                return Ok(studentSubmissions);
            }
            return BadRequest("Bad Request");
                
            }
        // عدد مرات ظهور الستيودنت اي دي ده في الجدول بتاع السبميشنز 
        
        private readonly AppDbContext _db;
    }
}
