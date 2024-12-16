using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace LMS.Data.Models
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
        public Course ?Course { get; set; }
        [JsonIgnore]
        public List<AssignmentSubmissions> ?Submissions { get; set; }
    }
}
