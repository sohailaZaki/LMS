using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace LMS.Data.Models
{
    public class AssessmentCriteria
    {
        public int Id { get; set; }
        public int ?Theoretical { get; set; }
        public int ?Practical { get; set; }
        public int ?Yearwork { get; set; }
        public int ?Midterm { get; set; }
        [Required]
        public int CourseID { get; set; }
        public int ?Quizzes { get; set; }

        [JsonIgnore] // لتجنب الدوران في البيانات عند الإرجاع
        public Course? Course { get; set; }
    }
}
