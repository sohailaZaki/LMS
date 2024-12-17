using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LMS.Migrations
{
    /// <inheritdoc />
    public partial class addingAssessmentCriteriatotabelCourse : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_AssessmentCriterias_CourseID",
                table: "AssessmentCriterias");

            migrationBuilder.AddColumn<int>(
                name: "AssesmentCriteriaId",
                table: "Courses",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_AssessmentCriterias_CourseID",
                table: "AssessmentCriterias",
                column: "CourseID",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_AssessmentCriterias_CourseID",
                table: "AssessmentCriterias");

            migrationBuilder.DropColumn(
                name: "AssesmentCriteriaId",
                table: "Courses");

            migrationBuilder.CreateIndex(
                name: "IX_AssessmentCriterias_CourseID",
                table: "AssessmentCriterias",
                column: "CourseID");
        }
    }
}
