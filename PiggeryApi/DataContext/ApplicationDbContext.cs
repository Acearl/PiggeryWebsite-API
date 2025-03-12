using Microsoft.EntityFrameworkCore;
using PiggeryApi.Models;
using System.Diagnostics.CodeAnalysis;

namespace PiggeryApi.DataContext
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext([NotNullAttribute] DbContextOptions options) : base(options)
        {

        }

        public DbSet<Expense> Expenses { get; set; }
        public DbSet<MedicalRecord> MedicalRecords { get; set; }
        public DbSet<Pen> Pens { get; set; }
        public DbSet<Pig> Pigs { get; set; }
        public DbSet<ProductInSale> ProductInSales { get; set; }
        public DbSet<Sale> Sales { get; set; }
        public DbSet<WeightRecord> WeightRecords { get; set; }
    }
}
