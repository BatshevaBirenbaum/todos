using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TodoApi.Migrations
{
    /// <inheritdoc />
    public partial class UpdateTableNameToItem : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameTable(
                name: "items",
                newName: "item");

            migrationBuilder.RenameColumn(
                name: "isComplete",
                table: "item",
                newName: "iscomplete");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameTable(
                name: "item",
                newName: "items");

            migrationBuilder.RenameColumn(
                name: "iscomplete",
                table: "items",
                newName: "isComplete");
        }
    }
}
