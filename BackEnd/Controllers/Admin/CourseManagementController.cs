using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LMS.Data;
using LMS.Data.Models;

namespace LMS.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class CourseManagementController : ControllerBase
	{
		private readonly AppDbContext _context;

		public CourseManagementController(AppDbContext context)
		{
			_context = context;
		}

		// 1. Get all courses with details
		[HttpGet]
		public IActionResult GetAllCourses()
		{
			var courses = _context.Courses
				.Include(c => c.Instructor)      // Fetch instructor details
				.Include(c => c.Assignments)     // Include assignments
				.Include(c => c.CourseMaterial)  // Include materials
				.ToList();

			var result = courses.Select(c => new
			{
				CourseID = c.ID,
				CourseName = c.Name,
				Description = c.Description,
				StartDate = c.StartDate,
				EndDate = c.EndDate,
				LectureDay = c.LectureDay,
				LectureTime = c.LectureTime,
				Status = c.Status,
				Location = c.Location,
				Instructor = c.Instructor != null ? $"{c.Instructor.FirstName} {c.Instructor.LastName}" : "N/A",
				TotalAssignments = c.Assignments?.Count ?? 0,
				TotalMaterials = c.CourseMaterial?.Count ?? 0
			});

			return Ok(result);
		}

		// 2. Edit course details
		[HttpPut("{id}")]
		public IActionResult EditCourse(int id, [FromBody] EditCourseDto dto)
		{
			var course = _context.Courses.Find(id);
			if (course == null)
				return NotFound(new { message = $"Course with ID {id} not found." });

			// Update course fields
			course.Name = dto.Name ?? course.Name;
			course.Description = dto.Description ?? course.Description;
			course.Status = dto.Status ?? course.Status;
			course.StartDate = dto.StartDate ?? course.StartDate;
			course.EndDate = dto.EndDate ?? course.EndDate;
			course.LectureDay = dto.LectureDay ?? course.LectureDay;
			course.LectureTime = dto.LectureTime ?? course.LectureTime;
			course.Location = dto.Location ?? course.Location;

			_context.SaveChanges();
			return Ok(new { message = "Course updated successfully." });
		}

		[HttpDelete("{id}")]
		public IActionResult DeleteCourse(int id)
		{
			
			var course = _context.Courses
				.Include(c => c.Assignments)
				.Include(c => c.CourseMaterial)
				.Include(c => c.Students)
				.Include(c => c.AssessmentCriteria) 
				.FirstOrDefault(c => c.ID == id);

			if (course == null)
			{
				return NotFound(new { message = $"Course with ID {id} not found." });
			}

			
			DeleteAssessmentCriteriasByCourseId(id);

	
			using var transaction = _context.Database.BeginTransaction();

			try
			{
				
				if (course.Assignments != null && course.Assignments.Any())
				{
					_context.Assignments.RemoveRange(course.Assignments);
				}

				if (course.CourseMaterial != null && course.CourseMaterial.Any())
				{
					_context.Materials.RemoveRange(course.CourseMaterial);
				}

				
				if (course.Students != null && course.Students.Any())
				{
					_context.StudentCourse.RemoveRange(course.Students);
				}

			
				_context.SaveChanges();

				_context.Courses.Remove(course);

				_context.SaveChanges();

				transaction.Commit();

				return Ok(new { message = "Course and all related data deleted successfully." });
			}
			catch (Exception ex)
			{
				
				try
				{
					transaction.Rollback();
				}
				catch (Exception rollbackEx)
				{
					
					return StatusCode(500, new { message = "Error during rollback.", details = rollbackEx.Message });
				}

				return StatusCode(500, new { message = "An error occurred while deleting the course.", details = ex.Message });
			}
		}

		private void DeleteAssessmentCriteriasByCourseId(int courseId)
		{
			var assessmentCriterias = _context.AssessmentCriterias.Where(ac => ac.CourseID == courseId).ToList();

			if (assessmentCriterias.Any())
			{
				_context.AssessmentCriterias.RemoveRange(assessmentCriterias);
				_context.SaveChanges();
			}
		}


		// 4. Create a new course without AssessmentCriteria
		[HttpPost]
		public IActionResult CreateCourse([FromBody] CreateCourseDto dto)
		{
			var instructor = _context.Users.Find(dto.InstructorID);
			if (instructor == null)
				return BadRequest(new { message = "Instructor not found." });

			var newCourse = new Course
			{
				Name = dto.Name,
				Description = dto.Description,
				InstructorID = dto.InstructorID,
				Status = dto.Status,
				StartDate = dto.StartDate,
				EndDate = dto.EndDate,
				LectureDay = dto.LectureDay,
				LectureTime = dto.LectureTime,
				Location = dto.Location,
				ImgPath = dto.ImgPath,
				AssessmentCriteriaId = null // Exclude AssessmentCriteria initially
			};

			_context.Courses.Add(newCourse);
			_context.SaveChanges();

			return Ok(new { message = "Course created successfully.", CourseID = newCourse.ID });
		}
		// 2. Get details of a specific course
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
				Name = course.Name,
				LectureTime = course.LectureTime,
				Location = course.Location,
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
	}

	// DTOs for input validation
	public class EditCourseDto
	{
		public string? Name { get; set; }
		public string? Description { get; set; }
		public string? Status { get; set; }
		public DateOnly? StartDate { get; set; }
		public DateOnly? EndDate { get; set; }
		public DayOfWeek? LectureDay { get; set; }
		public TimeSpan? LectureTime { get; set; }
		public string? Location { get; set; }
	}

	public class CreateCourseDto
	{
		public string Name { get; set; }
		public string Description { get; set; }
		public int InstructorID { get; set; }
		public string Status { get; set; }
		public DateOnly StartDate { get; set; }
		public DateOnly EndDate { get; set; }
		public DayOfWeek LectureDay { get; set; }
		public TimeSpan LectureTime { get; set; }
		public string Location { get; set; }
		public string? ImgPath { get; set; }
	}


}