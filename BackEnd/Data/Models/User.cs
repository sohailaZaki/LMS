using System.ComponentModel.DataAnnotations;
using LMS.Data.Models;

namespace LMS.Data.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string UserName { get; set; }
        public string Status { get; set; }
        public int RoleID { get; set; }
        public int CourseID { get; set; }

        public string Email { get; set; }
        public string RoleName { get; set; }
        public string Password { get; set; }
        public DateTime CreatedAt { get; set; }
        public Role Role { get; set; }
        public List<Course> RegisteredCourses { get; set; }

    }
}
