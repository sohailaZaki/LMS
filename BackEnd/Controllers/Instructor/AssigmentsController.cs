using LMS.Data;
using LMS.Data.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LMS.Controllers.Instructor
{
    [Route("api/[controller]")]
    [ApiController]
    public class AssigmentsController : ControllerBase
    {
        public AssigmentsController(AppDbContext db)
        {
            _db = db;
        }
        [HttpGet]
        public async Task<IActionResult> GetAssigments()
        {
            var assigments = await _db.Assignments.ToListAsync();
            if (assigments != null)
            {
                return Ok(assigments);
            }
        else { return BadRequest("There isn't any Assigments to Get"); 
            }
        }
        [HttpPost]
        public async Task<IActionResult> CreateAssigment([FromBody] Assignment assignment)
        {
            var A = new Assignment()
            {
                Name = assignment.Name,
                CourseID = assignment.CourseID,
                DeadLine = assignment.DeadLine,
                filepath = assignment.filepath,
                
            };
        _db.Assignments.Add(A);
            var course = _db.Courses.FirstOrDefault(c=>c.ID==A.CourseID);
            if (course != null) { 
               
            course.Assignments?.Add(A);
            }
            await _db.SaveChangesAsync();

            return Ok();
        }
        [HttpGet("{assigmentId}")]
        public async Task <IActionResult>  GetAssigment([FromRoute]int assigmentId)
        {
            var assigment = await _db.Assignments.FirstOrDefaultAsync(a => a.Id == assigmentId);

            var submisions = _db.AssignmentSubmissions.Where(s=>s.AssignmnetID== assigmentId).ToList();
            //var student = _db.Users.FirstOrDefault(s=>s.Studen== submisions.);
            if (assigment != null)
            {
            if (submisions.Count > 0)
            {
                assigment.Submissions = submisions;
                    
                    _db.Update(assigment);
                    _db.SaveChanges();
            }

            Console.WriteLine(assigment.Submissions.Count());
            Console.WriteLine(assigment.Submissions.ToArray());
                return Ok(assigment);
            }
            else return BadRequest("There isn't an Assigment with this id");
        }
        [HttpPost("{assigmentId}")]
        public async Task <IActionResult> submitEvaluation(int assigmentId , int Evaluation , int studentId)
        {
            var submission = await _db.AssignmentSubmissions.FirstOrDefaultAsync(A => A.AssignmnetID == assigmentId && A.StudentID == studentId);
            if (submission != null) {
             
                        submission.Evaluation = Evaluation;
                        _db.AssignmentSubmissions.Update(submission);
                        _db.SaveChanges();
                        return Ok(submission);
                
                //assigment.Submissions
            }
            return BadRequest("there isn't Addigment mathcing");
        }

        //[HttpGet("{assigmentId}")]
        //public async  Task <IActionResult> getAssigmentSubmissions(int assigmentId)
        //{
        //    var submisions = _db.AssignmentSubmissions.Where(s=>s.AssignmnetID== assigmentId).ToList();
        //   if (submisions.Count > 0) { return Ok(submisions); }
        //   else  return BadRequest("there isn't submissions");  
        //}
        private readonly AppDbContext _db ;
    }
}
