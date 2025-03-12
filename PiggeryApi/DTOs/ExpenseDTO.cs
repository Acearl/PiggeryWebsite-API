using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PiggeryApi.DTOs
{
    public class ExpenseDTO
    {
        public int ID { get; set; }
        public DateTime Date { get; set; }
        public double Cost { get; set; }
        public string? Notes { get; set; }
    }
}