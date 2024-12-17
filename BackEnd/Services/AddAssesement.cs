using LMS.Data;
using LMS.Data.Models;

namespace LMS.Services
{
    public class AssessmentService
    {

        private readonly AppDbContext _db;

        public AssessmentService(AppDbContext db)
        {
            _db = db;
        }
        public async Task<int> AddAssessmentCriteria(AssessmentCriteria? criteriaRequest, int courseID, int creatorId)
        {
            var assessmentCriteria = new AssessmentCriteria();

            if (creatorId == 3)
            {
                assessmentCriteria.CourseID = courseID;
            }

            if (creatorId == 2 && criteriaRequest != null)
            {
                assessmentCriteria.CourseID = courseID;
                assessmentCriteria.Midterm = criteriaRequest.Midterm;
                assessmentCriteria.Practical = criteriaRequest.Practical;
                assessmentCriteria.Theoretical = criteriaRequest.Theoretical;
                assessmentCriteria.Quizzes = criteriaRequest.Quizzes;
                assessmentCriteria.Yearwork = criteriaRequest.Yearwork;
            }

            _db.Add(assessmentCriteria);
            await _db.SaveChangesAsync();
            return assessmentCriteria.Id;
        }
    }
}

