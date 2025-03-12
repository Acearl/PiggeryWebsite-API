using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PiggeryApi.DTOs
{
    public class ProductInSaleDTO
    {
        public int ID { get; set; }
        public int SaleID { get; set; }
        public int? PigID { get; set; }
       //public PigDTO? Pig { get; set; }
        public string? Notes { get; set; } = string.Empty;
        //public SaleDTO? Sale { get; set; }
        //public ICollection<SaleDTO>? Sales { get; set; }
    }
}
