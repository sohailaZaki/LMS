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
    public class DashboardController : ControllerBase
    {
        private readonly AppDbContext _context;

        public DashboardController(AppDbContext context)
        {
            _context = context;
        }

        // 1. GET: Fetch dashboard statistics
        [HttpGet]
        [Route("statistics")]
        public IActionResult GetDashboardStatistics()
        {
            var totalUsers = _context.Users.Count();
            var activeStudents = _context.Users.Count(u => u.Role.Name == "Student" && u.Status == "Active");
            var totalCourses = _context.Courses.Count();
            var newRegistrations = _context.Users
                .Where(u => u.CreatedAt >= DateTime.UtcNow.AddDays(-30)) // Last 30 days registrations
                .Count();

            return Ok(new
            {
                TotalUsers = totalUsers,
                ActiveStudents = activeStudents,
                TotalCourses = totalCourses,
                NewRegistrations = newRegistrations
            });
        }

        // 2. GET: Fetch total users trend (weekly data for chart)
        [HttpGet]
        [Route("user-trend")]

        public IActionResult GetUserTrend()
        {
            var userTrend = _context.Users
                .GroupBy(u => new { Year = u.CreatedAt.Year, Month = u.CreatedAt.Month })
                .Select(g => new
                {
                    Year = g.Key.Year,
                    Month = g.Key.Month,
                    TotalUsers = g.Count()
                })
                .OrderBy(t => t.Year)
                .ThenBy(t => t.Month)
                .ToList();

            return Ok(userTrend);
        }


        // 3. GET: Fetch student dynamics for the year (monthly breakdown)
        [HttpGet]
        [Route("student-dynamics")]
        public IActionResult GetStudentDynamics([FromQuery] int year = 2023)
        {
            var studentDynamics = _context.Users
                .Where(u => u.Role.Name == "Student" && u.CreatedAt.Year == year)
                .GroupBy(u => u.CreatedAt.Month)
                .Select(g => new
                {
                    Month = g.Key,
                    TotalStudents = g.Count()
                })
                .OrderBy(s => s.Month)
                .ToList();

            return Ok(studentDynamics);
        }
    }
}