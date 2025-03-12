using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PiggeryApi.Models
{
    public class ProductInSale
    {
        
        public int ID { get; set; }
        public int SaleID { get; set; }
        [ForeignKey("ID")]
        public int? PigID { get; set; }
        [ForeignKey("PigID")]
        public Pig? Pig { get; set; }
        public string? Notes { get; set; } = string.Empty;
        [ForeignKey("SaleID")]
        public Sale? Sale { get; set; }
        public ICollection<Sale>? Sales { get; set; }
    }
}
