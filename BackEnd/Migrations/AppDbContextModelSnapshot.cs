﻿// <auto-generated />
using System;
using LMS.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace LMS.Migrations
{
    [DbContext(typeof(AppDbContext))]
    partial class AppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "9.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("LMS.Data.Models.AssessmentCriteria", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("CourseID")
                        .HasColumnType("int");

                    b.Property<int?>("Midterm")
                        .HasColumnType("int");

                    b.Property<int?>("Practical")
                        .HasColumnType("int");

                    b.Property<int?>("Quizzes")
                        .HasColumnType("int");

                    b.Property<int?>("Theoretical")
                        .HasColumnType("int");

                    b.Property<int?>("Yearwork")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("CourseID")
                        .IsUnique();

                    b.ToTable("AssessmentCriterias");
                });

            modelBuilder.Entity("LMS.Data.Models.Assignment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("CourseID")
                        .HasColumnType("int");

                    b.Property<DateTime>("DeadLine")
                        .HasColumnType("datetime2");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(200)
                        .HasColumnType("nvarchar(200)");

                    b.Property<string>("filepath")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("CourseID");

                    b.ToTable("Assignments");
                });

            modelBuilder.Entity("LMS.Data.Models.AssignmentSubmissions", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int?>("AssignmentId")
                        .HasColumnType("int");

                    b.Property<int?>("AssignmnetID")
                        .HasColumnType("int");

                    b.Property<int?>("CourseID")
                        .HasColumnType("int");

                    b.Property<int>("Evaluation")
                        .HasColumnType("int");

                    b.Property<string>("FilePath")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("StudentID")
                        .HasColumnType("int");

                    b.Property<DateTime>("SubmittedAt")
                        .HasColumnType("datetime2");

                    b.Property<string>("studentName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("AssignmentId");

                    b.HasIndex("CourseID");

                    b.HasIndex("StudentID");

                    b.ToTable("AssignmentSubmissions");
                });

            modelBuilder.Entity("LMS.Data.Models.Course", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                    b.Property<int?>("AssessmentCriteriaId")
                        .HasColumnType("int");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasMaxLength(500)
                        .HasColumnType("nvarchar(500)");

                    b.Property<DateOnly?>("EndDate")
                        .HasColumnType("date");

                    b.Property<string>("ImgPath")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("InstructorID")
                        .HasColumnType("int");

                    b.Property<int?>("LectureDay")
                        .HasColumnType("int");

                    b.Property<TimeSpan?>("LectureTime")
                        .HasColumnType("time");

                    b.Property<string>("Location")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(200)
                        .HasColumnType("nvarchar(200)");

                    b.Property<DateOnly?>("StartDate")
                        .HasColumnType("date");

                    b.Property<string>("Status")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.HasIndex("AssessmentCriteriaId")
                        .IsUnique()
                        .HasFilter("[AssessmentCriteriaId] IS NOT NULL");

                    b.HasIndex("InstructorID");

                    b.ToTable("Courses");
                });

            modelBuilder.Entity("LMS.Data.Models.Material", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"));

                    b.Property<string>("Category")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("CourseID")
                        .HasColumnType("int");

                    b.Property<string>("FilePath")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.HasIndex("CourseID");

                    b.ToTable("Materials");
                });

            modelBuilder.Entity("LMS.Data.Models.Role", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Roles");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Name = "Student"
                        },
                        new
                        {
                            Id = 2,
                            Name = "Instructor"
                        },
                        new
                        {
                            Id = 3,
                            Name = "Admin"
                        });
                });

            modelBuilder.Entity("LMS.Data.Models.StudentCourse", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                    b.Property<int>("CourseID")
                        .HasColumnType("int");

                    b.Property<int?>("Grade")
                        .HasColumnType("int");

                    b.Property<int>("StudentID")
                        .HasColumnType("int");

                    b.Property<int?>("Grade")
                        .HasColumnType("int");

                    b.Property<int>("StudentID")
                        .HasColumnType("int");

                    b.Property<string>("studentName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.HasIndex("CourseID");

                    b.HasIndex("StudentID");

                    b.ToTable("StudentCourse");
                });

            modelBuilder.Entity("LMS.Data.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("datetime2");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("RoleID")
                        .HasColumnType("int");

                    b.Property<string>("RoleName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Status")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("RoleID");

                    b.ToTable("Users");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            CreatedAt = new DateTime(2024, 12, 16, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Email = "Admin@cis.asu.edu.eg",
                            FirstName = "Admin",
                            LastName = "1",
                            Password = "admin1",
                            RoleID = 3,
                            RoleName = "Admin",
                            Status = "Active",
                            UserName = "Admin_1"
                        },
                        new
                        {
                            Id = 2,
                            CreatedAt = new DateTime(2024, 12, 16, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Email = "Admin@cis.asu.edu.eg",
                            FirstName = "Admin",
                            LastName = "2",
                            Password = "admin2",
                            RoleID = 3,
                            RoleName = "Admin",
                            Status = "Active",
                            UserName = "Admin_2"
                        });
                });

            modelBuilder.Entity("LMS.Data.Models.AssessmentCriteria", b =>
                {
                    b.HasOne("LMS.Data.Models.Course", "Course")
                        .WithOne()
                        .HasForeignKey("LMS.Data.Models.AssessmentCriteria", "CourseID")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("Course");
                });

            modelBuilder.Entity("LMS.Data.Models.Assignment", b =>
                {
                    b.HasOne("LMS.Data.Models.Course", "Course")
                        .WithMany("Assignments")
                        .HasForeignKey("CourseID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Course");
                });

            modelBuilder.Entity("LMS.Data.Models.AssignmentSubmissions", b =>
                {
                    b.HasOne("LMS.Data.Models.Assignment", "Assignment")
                        .WithMany("Submissions")
                        .HasForeignKey("AssignmentId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Course");
                });

            modelBuilder.Entity("LMS.Data.Models.AssignmentSubmissions", b =>
                {
                    b.HasOne("LMS.Data.Models.Assignment", "Assignment")
                        .WithMany("Submissions")
                        .HasForeignKey("AssignmentId");

                    b.HasOne("LMS.Data.Models.Course", null)
                        .WithMany("AssignmentSubmissions")
                        .HasForeignKey("CourseID");

                    b.HasOne("LMS.Data.Models.User", "Student")
                        .WithMany()
                        .HasForeignKey("StudentID");

                    b.Navigation("Assignment");

                    b.Navigation("Student");
                });

            modelBuilder.Entity("LMS.Data.Models.Course", b =>
                {
                    b.HasOne("LMS.Data.Models.AssessmentCriteria", "AssessmentCriteria")
                        .WithOne()
                        .HasForeignKey("LMS.Data.Models.Course", "AssessmentCriteriaId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.HasOne("LMS.Data.Models.User", "Instructor")
                        .WithMany()
                        .HasForeignKey("InstructorID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("AssessmentCriteria");

                    b.Navigation("Instructor");
                });

            modelBuilder.Entity("LMS.Data.Models.Material", b =>
                {
                    b.HasOne("LMS.Data.Models.Course", "Course")
                        .WithMany("CourseMaterial")
                        .HasForeignKey("CourseID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Course");
                });

            modelBuilder.Entity("LMS.Data.Models.StudentCourse", b =>
                {
                    b.HasOne("LMS.Data.Models.Course", "Course")
                        .WithMany("Students")
                        .HasForeignKey("CourseID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("LMS.Data.Models.User", "Student")
                        .WithMany("RegisteredCourses")
                        .HasForeignKey("StudentID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Course");

                    b.Navigation("Student");
                });

            modelBuilder.Entity("LMS.Data.Models.User", b =>
                {
                    b.HasOne("LMS.Data.Models.Role", "Role")
                        .WithMany("Users")
                        .HasForeignKey("RoleID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Role");
                });

            modelBuilder.Entity("LMS.Data.Models.Assignment", b =>
                {
                    b.Navigation("Submissions");
                });

            modelBuilder.Entity("LMS.Data.Models.Course", b =>
                {
                    b.Navigation("AssignmentSubmissions");

                    b.Navigation("Assignments");

                    b.Navigation("CourseMaterial");

                    b.Navigation("Students");
                });

            modelBuilder.Entity("LMS.Data.Models.Role", b =>
                {
                    b.Navigation("Users");
                });

            modelBuilder.Entity("LMS.Data.Models.User", b =>
                {
                    b.Navigation("RegisteredCourses");
                });
#pragma warning restore 612, 618
        }
    }
}
