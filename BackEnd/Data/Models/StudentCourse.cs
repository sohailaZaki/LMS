using System.ComponentModel.DataAnnotations;
using LMS.Data.Models;

namespace LMS.Data.Models
{
    public class StudentCourse
    {
        [Key]
        public int ID { get; set; }

        [Required]
        public int? StudentID { get; set; }

        [Required]
        public int? CourseID { get; set; }

        public string ?studentName { get; set; }

        [Range(0, 100)]
        public int? Grade { get; set; } = 0;

        public User ?Student { get; set; } // Navigation property

        public Course ?Course { get; set; } // Navigation property
    }
}
