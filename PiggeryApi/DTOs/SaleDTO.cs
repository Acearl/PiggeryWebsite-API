using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PiggeryApi.DTOs
{
    public class SaleDTO
    {
        [Key]
        public int ID { get; set; }
        [Required]
        public string Customer { get; set; } = string.Empty;
        [Required]
        public DateTime DateSold { get; set; }
        [Required]
        public double Price { get; set; }
        public string? Notes { get; set; } = string.Empty;

        //public ICollection<ProductInSale>? Products { set; get; }
    }
}
