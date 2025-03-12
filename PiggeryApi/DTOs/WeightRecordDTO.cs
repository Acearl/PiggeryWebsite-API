using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PiggeryApi.DTOs
{
    public class WeightRecordDTO
    {

        public int ID { get; set; }
        public int PigID { get; set; }
        public DateTime DateWeighed { get; set; }
        public float WeightKG { get; set; }
    }
}
