using System.ComponentModel.DataAnnotations;

namespace LMS.Models
{
    public class StudentProgresses
    {
        [Key]
        public int ID { get; set; }

        [Required]
        public int? StudentID { get; set; }

        [Required]
        public int? CourseID { get; set; }

        public bool IsCompleted { get; set; }

        [Range(0, 100)]
        public int? Grade { get; set; }

        public User Student { get; set; } // Navigation property

        public Course Course { get; set; } // Navigation property
    }
}
