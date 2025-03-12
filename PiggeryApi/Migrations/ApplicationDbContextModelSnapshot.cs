﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using PiggeryApi.DataContext;

#nullable disable

namespace PiggeryApi.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("PiggeryApi.Models.Expense", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"), 1L, 1);

                    b.Property<decimal>("Cost")
                        .HasColumnType("Money");

                    b.Property<DateTime>("Date")
                        .HasColumnType("Date");

                    b.Property<string>("Notes")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("Expenses");
                });

            modelBuilder.Entity("PiggeryApi.Models.MedicalRecord", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"), 1L, 1);

                    b.Property<DateTime>("Date")
                        .HasColumnType("Date");

                    b.Property<string>("Notes")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("PigID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("PigID");

                    b.ToTable("MedicalRecords");
                });

            modelBuilder.Entity("PiggeryApi.Models.Pen", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"), 1L, 1);

                    b.Property<string>("Notes")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("Pens");
                });

            modelBuilder.Entity("PiggeryApi.Models.Pig", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"), 1L, 1);

                    b.Property<DateTime?>("BirthDate")
                        .HasColumnType("Date");

                    b.Property<bool?>("CastrationStatus")
                        .HasColumnType("bit");

                    b.Property<int?>("Designation")
                        .HasColumnType("int");

                    b.Property<int?>("FatherID")
                        .HasColumnType("int");

                    b.Property<int?>("MotherID")
                        .HasColumnType("int");

                    b.Property<string>("Notes")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("PenID")
                        .HasColumnType("int");

                    b.Property<int?>("Sex")
                        .HasColumnType("int");

                    b.Property<int?>("Status")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("FatherID");

                    b.HasIndex("MotherID");

                    b.HasIndex("PenID");

                    b.ToTable("Pigs");
                });

            modelBuilder.Entity("PiggeryApi.Models.ProductInSale", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"), 1L, 1);

                    b.Property<string>("Notes")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("PigID")
                        .HasColumnType("int");

                    b.Property<int>("SaleID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("PigID");

                    b.HasIndex("SaleID");

                    b.ToTable("ProductInSales");
                });

            modelBuilder.Entity("PiggeryApi.Models.Sale", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"), 1L, 1);

                    b.Property<string>("Customer")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("DateSold")
                        .HasColumnType("Date");

                    b.Property<string>("Notes")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("Price")
                        .HasColumnType("float");

                    b.Property<int?>("ProductInSaleID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("ProductInSaleID");

                    b.ToTable("Sales");
                });

            modelBuilder.Entity("PiggeryApi.Models.WeightRecord", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"), 1L, 1);

                    b.Property<DateTime>("DateWeighed")
                        .HasColumnType("Date");

                    b.Property<int>("PigID")
                        .HasColumnType("int");

                    b.Property<float>("WeightKG")
                        .HasColumnType("real");

                    b.HasKey("ID");

                    b.HasIndex("PigID");

                    b.ToTable("WeightRecords");
                });

            modelBuilder.Entity("PiggeryApi.Models.MedicalRecord", b =>
                {
                    b.HasOne("PiggeryApi.Models.Pig", "Pig")
                        .WithMany("MedicalRecords")
                        .HasForeignKey("PigID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Pig");
                });

            modelBuilder.Entity("PiggeryApi.Models.Pig", b =>
                {
                    b.HasOne("PiggeryApi.Models.Pig", "Father")
                        .WithMany()
                        .HasForeignKey("FatherID");

                    b.HasOne("PiggeryApi.Models.Pig", "Mother")
                        .WithMany()
                        .HasForeignKey("MotherID");

                    b.HasOne("PiggeryApi.Models.Pen", "Pen")
                        .WithMany()
                        .HasForeignKey("PenID");

                    b.Navigation("Father");

                    b.Navigation("Mother");

                    b.Navigation("Pen");
                });

            modelBuilder.Entity("PiggeryApi.Models.ProductInSale", b =>
                {
                    b.HasOne("PiggeryApi.Models.Pig", "Pig")
                        .WithMany()
                        .HasForeignKey("PigID");

                    b.HasOne("PiggeryApi.Models.Sale", "Sale")
                        .WithMany()
                        .HasForeignKey("SaleID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Pig");

                    b.Navigation("Sale");
                });

            modelBuilder.Entity("PiggeryApi.Models.Sale", b =>
                {
                    b.HasOne("PiggeryApi.Models.ProductInSale", null)
                        .WithMany("Sales")
                        .HasForeignKey("ProductInSaleID");
                });

            modelBuilder.Entity("PiggeryApi.Models.WeightRecord", b =>
                {
                    b.HasOne("PiggeryApi.Models.Pig", "Pig")
                        .WithMany("WeightRecords")
                        .HasForeignKey("PigID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Pig");
                });

            modelBuilder.Entity("PiggeryApi.Models.Pig", b =>
                {
                    b.Navigation("MedicalRecords");

                    b.Navigation("WeightRecords");
                });

            modelBuilder.Entity("PiggeryApi.Models.ProductInSale", b =>
                {
                    b.Navigation("Sales");
                });
#pragma warning restore 612, 618
        }
    }
}
