using System.ComponentModel.DataAnnotations;

namespace LMS.Models
{
    public class Course
    {
        [Key]
        public int ID { get; set; }

        [Required]
        [MaxLength(200)]
        public string Name { get; set; }

        [MaxLength(500)]
        public string Description { get; set; }

        [Required]
        public int InstructorID { get; set; } // Foreign key to User

        [Required]
        public string Status { get; set; } // Active, Archived
        public List<Material> CourseMaterial { get; set; }

        public User Instructor { get; set; }
    }
}
