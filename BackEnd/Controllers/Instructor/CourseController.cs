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
        
        private readonly AppDbContext _db;
    }
}
