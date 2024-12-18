using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using LMS.Data;
using System.Linq;
using LMS.Data.Models;

namespace LMS.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AssignCourseController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AssignCourseController(AppDbContext context)
        {
            _context = context;
        }
        // 1. Get all users with optional filters
        [HttpGet]
        public IActionResult GetUsers([FromQuery] string role, [FromQuery] string status)
        {
            var users = _context.Users
                .Include(u => u.Role) // Include Role for filtering
                .AsQueryable();

            if (!string.IsNullOrEmpty(role))
                users = users.Where(u => u.Role.Name == role);

            if (!string.IsNullOrEmpty(status))
                users = users.Where(u => u.Status == status);

            // Project only required fields to avoid circular references
            var result = users.Select(u => new
            {
                u.Id,
                u.FirstName,
                u.LastName,
                u.UserName,
                u.Status,
                u.Email,
                RoleName = u.Role.Name // Project RoleName only, not the full Role object
            }).ToList();

            return Ok(result);
        }


        // 2. Assign a new course to a specific user
        [HttpPost("assign")]

        public IActionResult AssignCourse([FromBody] AssignCourseDto dto)
        {
            // Validate user existence
            var user = _context.Users.Find(dto.StudentId);
            if (user == null)
                return NotFound(new { message = $"User with ID {dto.StudentId} not found." });

            // Check if user is active
            if (user.Status != "Active")
            {
                string statusMessage = user.Status == "Deactivated"
                    ? "You're trying to assign a course to a deactivated user."
                    : "You're trying to assign a course to a pending user.";

                return BadRequest(new { message = statusMessage });
            }

            // Validate course existence (do not trigger navigation property for AssessmentCriteria)
            var course = _context.Courses
                .Where(c => c.ID == dto.CourseId)
                .Select(c => new { c.ID, c.Name }) // Avoid loading unnecessary navigation properties
                .FirstOrDefault();
            if (course == null)
                return NotFound(new { message = $"Course with ID {dto.CourseId} not found." });

            // Check if the course is already assigned to the user
            var existingAssignment = _context.StudentCourse
                .FirstOrDefault(sc => sc.StudentID == dto.StudentId && sc.CourseID == dto.CourseId);
            if (existingAssignment != null)
                return BadRequest(new { message = "Course already assigned to the user." });

            // Assign the course to the user
            var newAssignment = new StudentCourse
            {
                StudentID = dto.StudentId,
                CourseID = dto.CourseId,
                studentName = $"{user.FirstName} {user.LastName}"
            };

            _context.StudentCourse.Add(newAssignment);
            _context.SaveChanges();

            return Ok(new { message = $"Course '{course.Name}' assigned to user '{user.FirstName} {user.LastName}' successfully." });
        }


    }

    // Data Transfer Object (DTO) for assigning a course
    public class AssignCourseDto
    {
        public int StudentId { get; set; }
        public int CourseId { get; set; }
    }
}