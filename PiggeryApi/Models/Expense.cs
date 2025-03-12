using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PiggeryApi.Models
{
    public class Expense
    {
        [Key]
        public int ID { get; set; }
        [Column(TypeName="Date")]
        public DateTime Date { get; set; }
        [Required]
        [Column(TypeName = "Money")]
        public double Cost { get; set; }
        [Required]
        public string Notes { get; set; } = string.Empty;
    }
}
