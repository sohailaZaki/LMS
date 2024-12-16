namespace LMS.Data.Models
{
    public class AssessmentCriteria
    {
        public int Id { get; set; }
        public int Theoretical { get; set; }
        public int Practical { get; set; }
        public int Yearwork { get; set; }
        public int Midterm { get; set; }
        public int CourseID { get; set; }
        public int Quizzes { get; set; }
        public Course Courses { get; set; }
    }
}
