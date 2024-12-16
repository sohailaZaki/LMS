using LMS.Data.Models;
using LMS.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LMS.Services;
namespace LMS.Controllers.Instructor
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {

        public CourseController(AppDbContext db)
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
        public async Task<IActionResult> createCourse([FromBody] Course course, int CreatorId)
        {
            var C = new Course();
            AssessmentCriteria assessmentCriteria = new AssessmentCriteria();
            if (!ModelState.IsValid)
            {
                if (course == null)
                {
                    return BadRequest("there isn't course sent");
                }
                else if (course.AssessmentCriteria == null)
                {
                    return BadRequest("Assessment criteria is required.");
                }
                var errors = ModelState.Values.SelectMany(v => v.Errors)
                                               .Select(e => e.ErrorMessage);
                return BadRequest(new { errors });

            }

            if (CreatorId == 2)  //if Course Created by Instructor
            {
                C.Name = course.Name;
                C.Description = course.Description;
                C.Status = "Pending";
                C.InstructorID = course.InstructorID;


                if (course.AssessmentCriteria != null)
                {

                        assessmentCriteria.Midterm = course.AssessmentCriteria.Midterm;
                        assessmentCriteria.Practical = course.AssessmentCriteria.Practical;
                        assessmentCriteria.Quizzes = course.AssessmentCriteria.Quizzes;
                        assessmentCriteria.Theoretical = course.AssessmentCriteria.Theoretical;
                        assessmentCriteria.Yearwork = course.AssessmentCriteria.Yearwork;

                }

            }
            else if (CreatorId == 3)
            {                              //if Course Created by Admin 
                C.Name = course.Name;
                C.Description = course.Description;
                C.ID = course.ID;
                C.StartDate = course.StartDate;
                C.EndDate = course.EndDate;
                C.InstructorID = course.InstructorID;
                C.LectureDay = course.LectureDay;
                C.LectureTime = course.LectureTime;
                C.Location = course.Location;
                C.Status = "Active";
                C.ImgPath = course.ImgPath;
                assessmentCriteria.Midterm = 0;
                assessmentCriteria.Practical = 0;
                assessmentCriteria.Quizzes = 0;
                assessmentCriteria.Theoretical = 0;
                assessmentCriteria.Yearwork = 0;

            }
            else
            {
                return BadRequest("Invalid CreatorId");
            }
            _db.Courses.Add(C);
            await _db.SaveChangesAsync();
            assessmentCriteria.CourseID = C.ID;
            _db.AssessmentCriterias.Add(assessmentCriteria);
            await _db.SaveChangesAsync();
            //var cri = _db.AssessmentCriterias.FirstOrDefaultAsync(As => As.CourseID ==C.ID);
            C.AssessmentCriteriaId = assessmentCriteria.Id ;
            _db.Courses.Update(C);
            await _db.SaveChangesAsync();
            return Ok();
        }
        [HttpGet("{courseID}")]
        public async Task <IActionResult>GetCourse([FromRoute] int courseID)
        {
            var course = await _db.Courses.FirstOrDefaultAsync(c=>c.ID == courseID);
            
            if (course != null)
            {
                var criateria = await _db.AssessmentCriterias.FirstOrDefaultAsync(c => c.Id == course.AssessmentCriteriaId);
                Console.WriteLine(criateria?.Midterm + " " + criateria?.Practical + " " + criateria?.Theoretical+ " " + criateria?.Quizzes);
                Console.WriteLine(course?.Assignments?[0].Name);
                return Ok(course);
            }
            else return BadRequest("there is no course with this id");
        }
        
        private readonly AppDbContext _db;
    }
}
