using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LMS.Migrations
{
    /// <inheritdoc />
    public partial class ss : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
    name: "AssignmentSubmissions",
    columns: table => new
    {
        Id = table.Column<int>(type: "int", nullable: false)
            .Annotation("SqlServer:Identity", "1, 1"),
        AssignmentId = table.Column<int>(type: "int", nullable: false),
        CourseID = table.Column<int>(type: "int", nullable: true),
        StudentID = table.Column<int>(type: "int", nullable: true),
        AssignmnetID = table.Column<int>(type: "int", nullable: true),
        FilePath = table.Column<string>(type: "nvarchar(max)", nullable: false),
        SubmittedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
    },
    constraints: table =>
    {
        table.PrimaryKey("PK_AssignmentSubmissions", x => x.Id);
        table.ForeignKey(
            name: "FK_AssignmentSubmissions_Assignments_AssignmentId",
            column: x => x.AssignmentId,
            principalTable: "Assignments",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);
        table.ForeignKey(
            name: "FK_AssignmentSubmissions_Courses_CourseID",
            column: x => x.CourseID,
            principalTable: "Courses",
            principalColumn: "ID");
        table.ForeignKey(
            name: "FK_AssignmentSubmissions_Users_StudentID",
            column: x => x.StudentID,
            principalTable: "Users",
            principalColumn: "Id");
    });

            migrationBuilder.CreateTable(
                name: "StudentProgresses",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CourseID = table.Column<int>(type: "int", nullable: false),
                    StudentID = table.Column<int>(type: "int", nullable: false),
                    Grade = table.Column<int>(type: "int", nullable: true),
                    IsCompleted = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StudentProgresses", x => x.ID);
                    table.ForeignKey(
                        name: "FK_StudentProgresses_Courses_CourseID",
                        column: x => x.CourseID,
                        principalTable: "Courses",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_StudentProgresses_Users_StudentID",
                        column: x => x.StudentID,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AssignmentSubmissions_AssignmentId",
                table: "AssignmentSubmissions",
                column: "AssignmentId");

            migrationBuilder.CreateIndex(
                name: "IX_AssignmentSubmissions_CourseID",
                table: "AssignmentSubmissions",
                column: "CourseID");

            migrationBuilder.CreateIndex(
                name: "IX_AssignmentSubmissions_StudentID",
                table: "AssignmentSubmissions",
                column: "StudentID");

            migrationBuilder.CreateIndex(
                name: "IX_StudentProgresses_CourseID",
                table: "StudentProgresses",
                column: "CourseID");

            migrationBuilder.CreateIndex(
                name: "IX_StudentProgresses_StudentID",
                table: "StudentProgresses",
                column: "StudentID");
         
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
             name: "AssignmentSubmissions");

            migrationBuilder.DropTable(
                name: "StudentProgresses");
        }
    }
}
