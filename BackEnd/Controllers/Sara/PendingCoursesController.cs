using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LMS.Data;
using LMS.Data.Models;

namespace LMS.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PendingCoursesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PendingCoursesController(AppDbContext context)
        {
            _context = context;
        }

        // 1. Get all pending courses
        [HttpGet]
        public async Task<IActionResult> GetPendingCourses()
        {
            var pendingCourses = await _context.Courses
                .Include(c => c.Instructor)
                .Where(c => c.LectureTime == null) // Pending courses have no LectureTime set
                .ToListAsync();

            var result = pendingCourses.Select(c => new
            {
                CourseId = c.ID,
                Name = c.Name,
                Instructor = $"{c.Instructor.FirstName} {c.Instructor.LastName}",
                Status = c.Status
            });

            return Ok(result);
        }

        // 2. Get details of a specific pending course
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCourseDetails(int id)
        {
            var course = await _context.Courses
                .Include(c => c.AssessmentCriteria)
                .Include(c => c.Students)
                .FirstOrDefaultAsync(c => c.ID == id);

            if (course == null)
                return NotFound(new { message = "Course not found" });

            var result = new
            {
                CourseId = course.ID,
                Name = course.Name,
                Description = course.Description,
                Status = course.Status, // Add course status here
                AssessmentCriteria = new
                {
                    course.AssessmentCriteria?.Theoretical,
                    course.AssessmentCriteria?.Practical,
                    course.AssessmentCriteria?.Yearwork,
                    course.AssessmentCriteria?.Midterm,
                    course.AssessmentCriteria?.Quizzes
                },
                EnrollmentStats = new
                {
                    Assigned = course.Students?.Count ?? 0,
                    Dropped = 15 // Placeholder: Replace with actual logic for dropped students if available
                }
            };

            return Ok(result);
        }

        // 3. Complete course data (set LectureTime and Status to Active)
        [HttpPost("complete/{id}")]
        public async Task<IActionResult> CompleteCourseData(int id, [FromBody] CompleteCourseDto dto)
        {
            var course = await _context.Courses.FindAsync(id);

            if (course == null)
                return NotFound(new { message = "Course not found" });

            // Update lecture details and status
            course.LectureDay = dto.LectureDay;
            course.LectureTime = dto.LectureTime;
            course.Status = "Active"; // Change status to active
            course.Location = dto.Location;

            await _context.SaveChangesAsync();

            return Ok(new { message = "Course data completed successfully" });
        }
        [HttpDelete("delete/{id}")]
        public IActionResult DeletePendingCourse(int id)
        {
            // Fetch the pending course with related data
            var course = _context.Courses
                .Include(c => c.Assignments)
                .Include(c => c.CourseMaterial)
                .Include(c => c.Students)
                .Include(c => c.AssessmentCriteria)
                .FirstOrDefault(c => c.ID == id && (c.LectureTime == null || c.LectureDay == null));

            if (course == null)
            {
                return NotFound(new { message = $"Pending Course with ID {id} not found or already completed." });
            }

            // Delete related AssessmentCriteria entries
            DeleteAssessmentCriteriasByCourseId(id);

            using var transaction = _context.Database.BeginTransaction();

            try
            {
                // Delete related Assignments if they exist
                if (course.Assignments != null && course.Assignments.Any())
                {
                    _context.Assignments.RemoveRange(course.Assignments);
                }

                // Delete related CourseMaterial if they exist
                if (course.CourseMaterial != null && course.CourseMaterial.Any())
                {
                    _context.Materials.RemoveRange(course.CourseMaterial);
                }

                // Delete related Students (StudentCourse entries) if they exist
                if (course.Students != null && course.Students.Any())
                {
                    _context.StudentCourse.RemoveRange(course.Students);
                }

                // Save changes to ensure related data is deleted
                _context.SaveChanges();

                // Remove the pending course itself
                _context.Courses.Remove(course);
                _context.SaveChanges();

                // Commit the transaction
                transaction.Commit();

                return Ok(new { message = "Pending course and all related data deleted successfully." });
            }
            catch (Exception ex)
            {
                // Rollback in case of failure
                try
                {
                    transaction.Rollback();
                }
                catch (Exception rollbackEx)
                {
                    return StatusCode(500, new
                    {
                        message = "Error during rollback.",
                        details = rollbackEx.Message
                    });
                }

                return StatusCode(500, new
                {
                    message = "An error occurred while deleting the pending course.",
                    details = ex.Message
                });
            }
        }

        private void DeleteAssessmentCriteriasByCourseId(int courseId)
        {
            var assessmentCriterias = _context.AssessmentCriterias
                .Where(ac => ac.CourseID == courseId)
                .ToList();

            if (assessmentCriterias.Any())
            {
                _context.AssessmentCriterias.RemoveRange(assessmentCriterias);
                _context.SaveChanges();
            }
        }

    }


    // DTO for completing course data
    public class CompleteCourseDto
    {
        public DayOfWeek LectureDay { get; set; }
        public TimeSpan LectureTime { get; set; }
        public string Location { get; set; }
    }
}
