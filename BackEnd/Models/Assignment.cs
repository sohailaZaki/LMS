using System.ComponentModel.DataAnnotations;

namespace LMS.Models
{
    public class Assignment
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [MaxLength(200)]
        public string Name { get; set; }
        public string filepath { get; set; }
        public DateTime DeadLine { get; set; }
        public int CourseID { get; set; }
        //public List<AssignmentSubmission> Submissions { get; set; }
    }
}
