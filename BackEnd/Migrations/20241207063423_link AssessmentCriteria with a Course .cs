using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LMS.Migrations
{
    /// <inheritdoc />
    public partial class linkAssessmentCriteriawithaCourse : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CourseID",
                table: "AssessmentCriterias",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_AssessmentCriterias_CourseID",
                table: "AssessmentCriterias",
                column: "CourseID");

            migrationBuilder.AddForeignKey(
                name: "FK_AssessmentCriterias_Courses_CourseID",
                table: "AssessmentCriterias",
                column: "CourseID",
                principalTable: "Courses",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AssessmentCriterias_Courses_CourseID",
                table: "AssessmentCriterias");

            migrationBuilder.DropIndex(
                name: "IX_AssessmentCriterias_CourseID",
                table: "AssessmentCriterias");

            migrationBuilder.DropColumn(
                name: "CourseID",
                table: "AssessmentCriterias");
        }
    }
}
