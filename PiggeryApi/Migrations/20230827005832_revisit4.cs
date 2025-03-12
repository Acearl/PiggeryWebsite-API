using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PiggeryApi.Migrations
{
    public partial class revisit4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "DateEntered",
                table: "MedicalRecords",
                newName: "Date");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Date",
                table: "MedicalRecords",
                newName: "DateEntered");
        }
    }
}
