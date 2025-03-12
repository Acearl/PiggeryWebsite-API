using System.ComponentModel.DataAnnotations;

namespace PiggeryApi.DTOs
{
    public class ExpenseCreationDTO
    {
        public DateTime Date { get; set; }
        [Required]
        public double Cost { get; set; }
        [Required]
        public string Notes { get; set; } = string.Empty;
    }
}
