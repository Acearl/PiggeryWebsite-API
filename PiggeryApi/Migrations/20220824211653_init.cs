using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PiggeryApi.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Expenses",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Date = table.Column<DateTime>(type: "Date", nullable: false),
                    Cost = table.Column<decimal>(type: "Money", nullable: false),
                    Notes = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Expenses", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Pens",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pens", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Pigs",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PenID = table.Column<int>(type: "int", nullable: true),
                    Sex = table.Column<int>(type: "int", nullable: true),
                    MotherID = table.Column<int>(type: "int", nullable: true),
                    FatherID = table.Column<int>(type: "int", nullable: true),
                    Designation = table.Column<int>(type: "int", nullable: true),
                    BirthDate = table.Column<DateTime>(type: "Date", nullable: true),
                    CastrationStatus = table.Column<bool>(type: "bit", nullable: true),
                    Notes = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Status = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pigs", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Pigs_Pens_PenID",
                        column: x => x.PenID,
                        principalTable: "Pens",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_Pigs_Pigs_FatherID",
                        column: x => x.FatherID,
                        principalTable: "Pigs",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_Pigs_Pigs_MotherID",
                        column: x => x.MotherID,
                        principalTable: "Pigs",
                        principalColumn: "ID");
                });

            migrationBuilder.CreateTable(
                name: "MedicalRecords",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PigID = table.Column<int>(type: "int", nullable: false),
                    DateEntered = table.Column<DateTime>(type: "Date", nullable: false),
                    Notes = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MedicalRecords", x => x.ID);
                    table.ForeignKey(
                        name: "FK_MedicalRecords_Pigs_PigID",
                        column: x => x.PigID,
                        principalTable: "Pigs",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "WeightRecords",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PigID = table.Column<int>(type: "int", nullable: false),
                    DateWeighed = table.Column<DateTime>(type: "Date", nullable: false),
                    WeightKG = table.Column<float>(type: "real", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WeightRecords", x => x.ID);
                    table.ForeignKey(
                        name: "FK_WeightRecords_Pigs_PigID",
                        column: x => x.PigID,
                        principalTable: "Pigs",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ProductInSale",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SaleID = table.Column<int>(type: "int", nullable: false),
                    PigID = table.Column<int>(type: "int", nullable: true),
                    Notes = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductInSale", x => x.ID);
                    table.ForeignKey(
                        name: "FK_ProductInSale_Pigs_PigID",
                        column: x => x.PigID,
                        principalTable: "Pigs",
                        principalColumn: "ID");
                });

            migrationBuilder.CreateTable(
                name: "Sales",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Customer = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DateSold = table.Column<DateTime>(type: "Date", nullable: false),
                    Price = table.Column<double>(type: "float", nullable: false),
                    Notes = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ProductInSaleID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sales", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Sales_ProductInSale_ProductInSaleID",
                        column: x => x.ProductInSaleID,
                        principalTable: "ProductInSale",
                        principalColumn: "ID");
                });

            migrationBuilder.CreateIndex(
                name: "IX_MedicalRecords_PigID",
                table: "MedicalRecords",
                column: "PigID");

            migrationBuilder.CreateIndex(
                name: "IX_Pigs_FatherID",
                table: "Pigs",
                column: "FatherID");

            migrationBuilder.CreateIndex(
                name: "IX_Pigs_MotherID",
                table: "Pigs",
                column: "MotherID");

            migrationBuilder.CreateIndex(
                name: "IX_Pigs_PenID",
                table: "Pigs",
                column: "PenID");

            migrationBuilder.CreateIndex(
                name: "IX_ProductInSale_PigID",
                table: "ProductInSale",
                column: "PigID");

            migrationBuilder.CreateIndex(
                name: "IX_ProductInSale_SaleID",
                table: "ProductInSale",
                column: "SaleID");

            migrationBuilder.CreateIndex(
                name: "IX_Sales_ProductInSaleID",
                table: "Sales",
                column: "ProductInSaleID");

            migrationBuilder.CreateIndex(
                name: "IX_WeightRecords_PigID",
                table: "WeightRecords",
                column: "PigID");

            migrationBuilder.AddForeignKey(
                name: "FK_ProductInSale_Sales_SaleID",
                table: "ProductInSale",
                column: "SaleID",
                principalTable: "Sales",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProductInSale_Pigs_PigID",
                table: "ProductInSale");

            migrationBuilder.DropForeignKey(
                name: "FK_ProductInSale_Sales_SaleID",
                table: "ProductInSale");

            migrationBuilder.DropTable(
                name: "Expenses");

            migrationBuilder.DropTable(
                name: "MedicalRecords");

            migrationBuilder.DropTable(
                name: "WeightRecords");

            migrationBuilder.DropTable(
                name: "Pigs");

            migrationBuilder.DropTable(
                name: "Pens");

            migrationBuilder.DropTable(
                name: "Sales");

            migrationBuilder.DropTable(
                name: "ProductInSale");
        }
    }
}
