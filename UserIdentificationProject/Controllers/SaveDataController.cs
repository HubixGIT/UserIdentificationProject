using Microsoft.AspNetCore.Mvc;
using UserIdentificationProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using Newtonsoft.Json;

namespace UserIdentificationProject.Controllers
{
    public class SaveDataController : Controller
    {
        
        public string GetData(string function_param)
        {
            dynamic func_param = JsonConvert.DeserializeObject(function_param);

            Console.WriteLine(func_param.login);

            return null;
            
        }

            [HttpPost]
            public IActionResult SaveData(SaveDataModel model)
            {
                SaveDataModel data = new SaveDataModel
                {
                    Login = model.Login,
                    Key = model.Key,
                    PressTime = model.PressTime,
                    NextKeyTime = model.NextKeyTime
                };

                return View();
            }
        
    }
}
