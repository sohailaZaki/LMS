
using LMS.Data.Models;
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
      public  DbSet<Course> Courses { get; set; }
        DbSet<AssignmentSubmissions> AssignmentSubmissions { get; set; }
        DbSet<StudentProgresses> StudentProgresses { get; set; }
        DbSet<Role> Roles { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Role>().HasData(
            new Role { Id = 1, Name = "Student" },
            new Role { Id = 2, Name = "Instructor" },
            new Role { Id = 3, Name = "Admin" }
);
        }


    }
}



    


