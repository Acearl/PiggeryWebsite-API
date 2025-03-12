using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PiggeryApi.Models
{
    public class WeightRecord
    {
        [Key]
        //[DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int ID { get; set; }
        [Required]
        public int PigID { get; set; }
        [Column(TypeName = "Date")]
        public DateTime DateWeighed { get; set; }
        public float WeightKG { get; set; }
        [ForeignKey("PigID")]
        public Pig? Pig { set; get; }
    }
}
