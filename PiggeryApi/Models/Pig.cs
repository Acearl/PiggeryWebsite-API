using Microsoft.EntityFrameworkCore.Storage.ValueConversion.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace PiggeryApi.Models
{
    public enum status
    {

        Alive, Dead, Sold, Other
    }
    public enum sex
    {
        M, F
    }
    public enum designation
    {
        Undecided, Breeder, Grower, Finisher
    }
    public class Pig
    {
        

        [Key]
        public int ID { get; set; }
        [Newtonsoft.Json.JsonConverter(typeof(StringEnumConverter))]
        public Pen? Pen { get; set; }
        public sex? Sex { get; set; }
        //[ForeignKey(nameof(ID))]
        public int? MotherID { get; set; }
        public int? FatherID { get; set; }
        [Newtonsoft.Json.JsonConverter(typeof(StringEnumConverter))]
        public designation? Designation { get; set; }
        [Column(TypeName = "Date")]
        public DateTime? BirthDate { set; get; }
        public Boolean? CastrationStatus { set; get; }
        public string? Notes { get; set; } = string.Empty;
        [Newtonsoft.Json.JsonConverter(typeof(StringEnumConverter))]
        public status? Status { get; set; }
        
        [ForeignKey(nameof(MotherID))]
        public Pig? Mother { get; set; }
        [ForeignKey(nameof(FatherID))]
        public Pig? Father { get; set; }
        public ICollection<WeightRecord>? WeightRecords { get; set; }
        public ICollection<MedicalRecord>? MedicalRecords { get; set; }

        //public ICollection<Pig>? Pigs { get; set; } //related pigs
    }
}
