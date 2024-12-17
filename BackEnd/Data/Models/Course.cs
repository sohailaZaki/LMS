using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json.Serialization;

namespace LMS.Data.Models
{
    public class Course
    {
      
            [Key]
            public int ID { get; set; }

            [Required]
            [MaxLength(200)]
            public string? Name { get; set; }

            [MaxLength(500)]
            [Required]
            public string? Description { get; set; }

            [Required]
            public int? InstructorID { get; set; } // Foreign key to User
     
            [Required]
            public string? Status { get; set; } // Active, Archived
        //[JsonIgnore]
            public List<Material>? CourseMaterial { get; set; }
        public List<AssignmentSubmissions> AssignmentSubmissions { get; set; }

        public User? Instructor { get; set; }

        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
            public AssessmentCriteria? AssessmentCriteria { get; set; }
            public List<Assignment> ?Assignments { get; set; }
            public List<StudentCourse> ?Students { get; set; }
            public int ?AssessmentCriteriaId { get; set; }
        public DateOnly? StartDate { get; set; }
            public DateOnly? EndDate { get; set; }
            public DayOfWeek? LectureDay { get; set; }
            public TimeSpan? LectureTime { get; set; }
            public string? Location { get; set; }
            public string? ImgPath { get; set; }
        }

    }

