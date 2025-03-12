using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PiggeryApi.Models
{
    public class Sale
    {
        [Key]
        public int ID { get; set; }
        [Required]
        public string Customer { get; set; } = string.Empty;
        [Column(TypeName = "Date")]
        [Required]
        public DateTime DateSold { get; set; }
        [Required]
        public double Price { get; set; }
        public string? Notes { get; set; } = string.Empty;

        //public ICollection<ProductInSale>? Products { set; get; }
    }
}
