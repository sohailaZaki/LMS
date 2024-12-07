namespace LMS.Models
{
    public class Material
    {
        public int id { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public string FilePath { get; set; }
        public int CourseID { get; set; }
        public Course Course { get; set; }
    }
}
