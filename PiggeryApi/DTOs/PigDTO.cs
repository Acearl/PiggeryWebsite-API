using Microsoft.EntityFrameworkCore.Storage.ValueConversion.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace PiggeryApi.DTOs
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
    public class PigDTO
    {
        

        [Key]
        public int ID { get; set; }
        [Newtonsoft.Json.JsonConverter(typeof(StringEnumConverter))]
        public PenDTO? Pen { get; set; }
        public sex? Sex { get; set; }
        public int? MotherID { get; set; }
        public int? FatherID { get; set; }
        [Newtonsoft.Json.JsonConverter(typeof(StringEnumConverter))]
        public designation? Designation { get; set; }
        public DateTime? BirthDate { set; get; }
        public Boolean? CastrationStatus { set; get; }
        public string? Notes { get; set; } = string.Empty;
        [Newtonsoft.Json.JsonConverter(typeof(StringEnumConverter))]
        public status? Status { get; set; }
        
        //public ICollection<WeightRecordDTO>? WeightRecords { get; set; }
        //public ICollection<MedicalRecordCreationDTO>? MedicalRecords { get; set; }

        //public ICollection<Pig>? Pigs { get; set; } //related pigs
    }
}
