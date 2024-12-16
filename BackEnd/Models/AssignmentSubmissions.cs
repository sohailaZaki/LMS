using LMS.Data.Models;

namespace LMS.Models
{
    public class AssignmentSubmissions
    {
        public int Id { get; set; }
        public int? StudentID { get; set; }
        public User Student { get; set; }
        public int? CourseID { get; set; }
        public Course Course { get; set; }
        public string FilePath { get; set; }
        public DateTime SubmittedAt { get; set; } = DateTime.UtcNow;
        public int? AssignmnetID { get; set; }
        public Assignment Assignment { get; set; }
    }
}
