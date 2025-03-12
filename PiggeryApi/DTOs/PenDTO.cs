using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PiggeryApi.DTOs
{
    public class PenDTO
    {
        public int ID { get; set; }
        public string? Notes { get; set; }

    }
}
