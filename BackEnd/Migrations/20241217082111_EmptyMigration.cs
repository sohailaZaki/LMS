using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LMS.Migrations
{
    /// <inheritdoc />
    public partial class EmptyMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AssessmentCriterias_Courses_CourseID",
                table: "AssessmentCriterias");

            migrationBuilder.AlterColumn<string>(
                name: "studentName",
                table: "StudentCourse",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");


            migrationBuilder.CreateIndex(
                name: "IX_Courses_AssessmentCriteriaId",
                table: "Courses",
                column: "AssessmentCriteriaId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_AssessmentCriterias_Courses_CourseID",
                table: "AssessmentCriterias",
                column: "CourseID",
                principalTable: "Courses",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Courses_AssessmentCriterias_AssessmentCriteriaId",
                table: "Courses",
                column: "AssessmentCriteriaId",
                principalTable: "AssessmentCriterias",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AssessmentCriterias_Courses_CourseID",
                table: "AssessmentCriterias");

            migrationBuilder.DropForeignKey(
                name: "FK_Courses_AssessmentCriterias_AssessmentCriteriaId",
                table: "Courses");

            migrationBuilder.DropIndex(
                name: "IX_Courses_AssessmentCriteriaId",
                table: "Courses");

            migrationBuilder.DropColumn(
                name: "studentName",
                table: "AssignmentSubmissions");

            migrationBuilder.AlterColumn<string>(
                name: "studentName",
                table: "StudentCourse",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_AssessmentCriterias_Courses_CourseID",
                table: "AssessmentCriterias",
                column: "CourseID",
                principalTable: "Courses",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
