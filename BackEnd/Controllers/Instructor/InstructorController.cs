using LMS.Data.Models;
using LMS.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LMS.Services;

using LMS.Handelrs;

namespace LMS.Controllers.Instructor
{
    [Route("api/[controller]")]
    [ApiController]
    public class InstructorController : ControllerBase
    {

        public InstructorController(AppDbContext db)
        {
            _db = db;
        }
        [HttpGet("/Courses")]
        public async Task<IActionResult> getCourses()
        {
            var courses = await _db.Courses.ToListAsync();
            return Ok(courses);
        }

        [HttpPost("/Course")]
        public async Task<IActionResult> createCourse([FromBody] Course course)
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

            if (course != null)  //if Course Created by Instructor
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
            //{                              //if Course Created by Admin 
            //else if (CreatorId == 3)
            //    C.Name = course.Name;
            //    C.Description = course.Description;
            //    C.ID = course.ID;
            //    C.StartDate = course.StartDate;
            //    C.EndDate = course.EndDate;
            //    C.InstructorID = course.InstructorID;
            //    C.LectureDay = course.LectureDay;
            //    C.LectureTime = course.LectureTime;
            //    C.Location = course.Location;
            //    C.Status = "Active";
            //    C.ImgPath = course.ImgPath;
            //    assessmentCriteria.Midterm = 0;
            //    assessmentCriteria.Practical = 0;
            //    assessmentCriteria.Quizzes = 0;
            //    assessmentCriteria.Theoretical = 0;
            //    assessmentCriteria.Yearwork = 0;

            //}
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
            C.AssessmentCriteriaId = assessmentCriteria.Id; 
             _db.Courses.Update(C);
            await _db.SaveChangesAsync();
            return Ok();
        }
        [HttpGet("Course/{courseID}")]
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

        [HttpPost("{courseId}/Upload")]
        public async Task<IActionResult> UploadFiles(int courseId,int fileType,IFormFile formFile)
        {
            if (formFile == null) {
                return BadRequest("there isn't file uploaded");
            }
            var material = new Material()
            {
                Category = fileType.ToString(),
                CourseID = courseId,
                FilePath =  new  UploadHandelr().Uploadfile(formFile, fileType),
                Name = formFile.Name
                
            };
            var course = _db.Courses.FirstOrDefault(c => c.ID == material.CourseID);
            _db.Materials.Add(material);
            _db.SaveChanges();
            if (course != null) { 
            course.CourseMaterial?.Add (material);
            _db.Update(course);
            _db.SaveChanges();
            }
            return Ok(material);
        }

        [HttpGet("{courseId}/Upload")]

        public async Task <IActionResult> getFiles(int courseId,int fileType)
        {
            string [] files = new UploadHandelr().getUploadedfiles(fileType);
            if (files != null)
            {
                return Ok(files);
            }
            return BadRequest("Can't Get Files check your Request ");
        }

        [HttpGet("Download/{fileName}")]
        public async Task<IActionResult> DownloadFile(string fileName, int fileType)
        {
            string path;
            if (fileType == 1)
            {
                path = Path.Combine(Directory.GetCurrentDirectory(), "Uploads\\Lectures\\", fileName);
            }
            else if (fileType == 2)
            {
                path = Path.Combine(Directory.GetCurrentDirectory(), "Uploads\\Labs\\", fileName);
            }
            else if (fileType == 3)
            {
                path = Path.Combine(Directory.GetCurrentDirectory(), "Uploads\\Videos\\", fileName);
            }
            else
            {
                path = Path.Combine(Directory.GetCurrentDirectory(), "Uploads\\Assesment\\", fileName);
            }
            if (System.IO.File.Exists(path))
            {
                Console.WriteLine(File(path, "application/octet-stream", fileName).FileDownloadName);
                return File(path, "application/octet-stream", fileName);

            }
            else
            {
                return NotFound($"The file {fileName} was not found.");
            }
        }
        private readonly AppDbContext _db;
    }
}
