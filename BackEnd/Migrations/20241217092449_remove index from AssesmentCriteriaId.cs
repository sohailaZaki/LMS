using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LMS.Migrations
{
    /// <inheritdoc />
    public partial class removeindexfromAssesmentCriteriaId : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Courses_AssessmentCriteriaId",
                table: "Courses");

            migrationBuilder.AlterColumn<int>(
                name: "AssessmentCriteriaId",
                table: "Courses",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.CreateIndex(
                name: "IX_Courses_AssessmentCriteriaId",
                table: "Courses",
                column: "AssessmentCriteriaId",
                unique: true,
                filter: "[AssessmentCriteriaId] IS NOT NULL");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Courses_AssessmentCriteriaId",
                table: "Courses");

            migrationBuilder.AlterColumn<int>(
                name: "AssessmentCriteriaId",
                table: "Courses",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Courses_AssessmentCriteriaId",
                table: "Courses",
                column: "AssessmentCriteriaId",
                unique: true);
        }
    }
}
