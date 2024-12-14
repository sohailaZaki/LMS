
using LMS.Models;
using Microsoft.EntityFrameworkCore;

namespace LMS.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {


        }
        DbSet<User> Users { get; set; }
        DbSet<Assignment> Assignments { get; set; }
        DbSet<Material> Materials { get; set; }
        DbSet<AssessmentCriteria> AssessmentCriterias { get; set; }
        DbSet<Course> Courses { get; set; }
        DbSet<AssignmentSubmission> AssignmentSubmissions { get; set; }
        DbSet<StudentProgress> StudentProgresses { get; set; }
        DbSet<Role> Roles { get; set; }
        


    }
}

