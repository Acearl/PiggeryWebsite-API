using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PiggeryApi.DTOs
{
    public class MedicalRecordDTO
    {
        public int Id { get; set; }
        public int PigID { get; set; }
        [Required]
        public DateTime Date { get; set; }
        [Required]
        public string Notes { get; set; } = string.Empty;
    }
}
