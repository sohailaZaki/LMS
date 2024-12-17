using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace LMS.Migrations
{
    /// <inheritdoc />
    public partial class addingAdminDatatouser : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "CreatedAt", "Email", "FirstName", "LastName", "Password", "RoleID", "RoleName", "Status", "UserName" },
                values: new object[,]
                {
                    { 1, new DateTime(2024, 12, 16, 0, 0, 0, 0, DateTimeKind.Unspecified), "Admin@cis.asu.edu.eg", "Admin", "1", "admin1", 3, "Admin", "Active", "Admin_1" },
                    { 2,  new DateTime(2024, 12, 16, 0, 0, 0, 0, DateTimeKind.Unspecified), "Admin@cis.asu.edu.eg", "Admin", "2", "admin2", 3, "Admin", "Active", "Admin_2" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2);
        }
    }
}
