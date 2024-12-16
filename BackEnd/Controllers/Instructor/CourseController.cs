using LMS.Data.Models;
using LMS.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LMS.Controllers.Instructor
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        public CourseController( AppDbContext db)
        {
            _db = db;
        }
        [HttpGet]
        public async Task<IActionResult> getCourses()
        {
            var courses = await _db.Courses.ToListAsync();
            return Ok(courses);
        }
        [HttpPost]
        public async Task<IActionResult> createCourse(Course course,int CreatorId)
        {
            var C = new Course();
            if (CreatorId == 2)  //if Course Created by Instructor
            {
                C.Name = course.Name;
                C.Status = "Pending";
                C.Description = course.Description;
                C.InstructorID = CreatorId;
                
            }

            _db.Courses.Add(C);
            await _db.SaveChangesAsync();
            return Ok();
        }

        
        private readonly AppDbContext _db;
    }
}
