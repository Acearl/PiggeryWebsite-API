using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PiggeryApi.Migrations
{
    public partial class revisit : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProductInSale_Pigs_PigID",
                table: "ProductInSale");

            migrationBuilder.DropForeignKey(
                name: "FK_ProductInSale_Sales_SaleID",
                table: "ProductInSale");

            migrationBuilder.DropForeignKey(
                name: "FK_Sales_ProductInSale_ProductInSaleID",
                table: "Sales");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ProductInSale",
                table: "ProductInSale");

            migrationBuilder.RenameTable(
                name: "ProductInSale",
                newName: "ProductInSales");

            migrationBuilder.RenameIndex(
                name: "IX_ProductInSale_SaleID",
                table: "ProductInSales",
                newName: "IX_ProductInSales_SaleID");

            migrationBuilder.RenameIndex(
                name: "IX_ProductInSale_PigID",
                table: "ProductInSales",
                newName: "IX_ProductInSales_PigID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ProductInSales",
                table: "ProductInSales",
                column: "ID");

            migrationBuilder.AddForeignKey(
                name: "FK_ProductInSales_Pigs_PigID",
                table: "ProductInSales",
                column: "PigID",
                principalTable: "Pigs",
                principalColumn: "ID");

            migrationBuilder.AddForeignKey(
                name: "FK_ProductInSales_Sales_SaleID",
                table: "ProductInSales",
                column: "SaleID",
                principalTable: "Sales",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Sales_ProductInSales_ProductInSaleID",
                table: "Sales",
                column: "ProductInSaleID",
                principalTable: "ProductInSales",
                principalColumn: "ID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProductInSales_Pigs_PigID",
                table: "ProductInSales");

            migrationBuilder.DropForeignKey(
                name: "FK_ProductInSales_Sales_SaleID",
                table: "ProductInSales");

            migrationBuilder.DropForeignKey(
                name: "FK_Sales_ProductInSales_ProductInSaleID",
                table: "Sales");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ProductInSales",
                table: "ProductInSales");

            migrationBuilder.RenameTable(
                name: "ProductInSales",
                newName: "ProductInSale");

            migrationBuilder.RenameIndex(
                name: "IX_ProductInSales_SaleID",
                table: "ProductInSale",
                newName: "IX_ProductInSale_SaleID");

            migrationBuilder.RenameIndex(
                name: "IX_ProductInSales_PigID",
                table: "ProductInSale",
                newName: "IX_ProductInSale_PigID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ProductInSale",
                table: "ProductInSale",
                column: "ID");

            migrationBuilder.AddForeignKey(
                name: "FK_ProductInSale_Pigs_PigID",
                table: "ProductInSale",
                column: "PigID",
                principalTable: "Pigs",
                principalColumn: "ID");

            migrationBuilder.AddForeignKey(
                name: "FK_ProductInSale_Sales_SaleID",
                table: "ProductInSale",
                column: "SaleID",
                principalTable: "Sales",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Sales_ProductInSale_ProductInSaleID",
                table: "Sales",
                column: "ProductInSaleID",
                principalTable: "ProductInSale",
                principalColumn: "ID");
        }
    }
}
