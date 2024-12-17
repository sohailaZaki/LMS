using System.Text.Json.Serialization;

namespace LMS.Data.Models
{
    public class Material
    {
        public int id { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public string FilePath { get; set; }
        public int CourseID { get; set; }
        [JsonIgnore]
        public Course ?Course { get; set; }
    }
}
