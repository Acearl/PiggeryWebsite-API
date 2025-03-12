using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace PiggeryApi.Creation.DTOs
{
    public class WeightRecordCreationDTO
    {

        public int PigID { get; set; }
        public DateTime DateWeighed { get; set; }
        public float WeightKG { get; set; }
    }
}
