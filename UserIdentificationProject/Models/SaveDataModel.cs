using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserIdentificationProject.Models
{
    public class SaveDataModel
    {
        public int ID { get; set; } 
        public string Key { get; set; }
        public int PressTime { get; set; }
        public int NextKeyTime { get; set; }
        public string Login { get; set; }
    }
}
