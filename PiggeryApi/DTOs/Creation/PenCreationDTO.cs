using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PiggeryApi.Models
{
    public class PenCreationDTO
    {
        public string? Notes { get; set; } = string.Empty;
    }
}
