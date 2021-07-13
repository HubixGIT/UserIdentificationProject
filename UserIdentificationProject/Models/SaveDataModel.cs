using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserIdentificationProject.Models
{
    public class SaveDataModel
    {
        public int ID { get; set; }
        public string Login { get; set; } 
        public string Znak { get; set; }
        public int CzasPrzytrzymania { get; set; }
        public int CzasDoNastepnegoZnaku { get; set; }
    }
}
