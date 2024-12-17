using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using LMS.Data;
using System.Linq;


namespace LMS.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserManagementController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UserManagementController(AppDbContext context)
        {
            _context = context;
        }

        // 1. Get all users with optional filters
        [HttpGet]
        public IActionResult GetUsers([FromQuery] string role, [FromQuery] string status)
        {
            var users = _context.Users.AsQueryable();

            if (!string.IsNullOrEmpty(role))
                users = users.Where(u => u.Role.Name == role);

            if (!string.IsNullOrEmpty(status))
                users = users.Where(u => u.Status == status);

            return Ok(users.ToList());
        }

        // 2. Approve a user
        [HttpPost("approve/{id}")]
        public IActionResult ApproveUser(int id)
        {
            var user = _context.Users.Find(id);
            if (user == null) return NotFound();

            user.Status = "Active";
            _context.SaveChanges();

            return Ok(new { message = "User approved successfully" });
        }

        // 3. Deactivate a user
        [HttpPost("deactivate/{id}")]
        public IActionResult DeactivateUser(int id)
        {
            var user = _context.Users.Find(id);
            if (user == null) return NotFound();

            user.Status = "Deactivated";
            _context.SaveChanges();

            return Ok(new { message = "User deactivated successfully" });
        }

        // 4. Delete a user
        [HttpDelete("{id}")]

        public IActionResult DeleteUser(int id)
        {
            var user = _context.Users.Find(id);
            if (user == null)
                return NotFound(new { message = "User not found" });

            // Check and delete related records in StudentCourse
            var relatedCourses = _context.StudentCourse.Where(sc => sc.StudentID == id).ToList();
            if (relatedCourses.Any())
            {
                _context.StudentCourse.RemoveRange(relatedCourses);
            }

            // Delete the user
            _context.Users.Remove(user);
            _context.SaveChanges();

            return Ok(new { message = "User and related courses deleted successfully" });
        }

    }
}