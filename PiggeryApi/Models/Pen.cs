using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PiggeryApi.Models
{
    public class Pen
    {
        [Key]
        //[DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int ID { get; set; }
        public string? Notes { get; set; } = string.Empty;
        //[Newtonsoft.Json.JsonConverter(typeof(StringEnumConverter))];
    }
}
