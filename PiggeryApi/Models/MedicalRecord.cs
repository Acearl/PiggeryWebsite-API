using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PiggeryApi.Models
{
    public class MedicalRecord
    {
        [Key]
        public int ID { get; set; }
        [Required]
        public int PigID { get; set; }
        [Column(TypeName = "Date")]
        [Required]
        public DateTime Date { get; set; }
        [Required]
        public string Notes { get; set; } = string.Empty;
        [ForeignKey("PigID")]
        public Pig? Pig { set; get; }
    }
}
