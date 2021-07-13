using Microsoft.AspNetCore.Mvc;
using UserIdentificationProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserIdentificationProject.Controllers
{
    public class SaveDataController : Controller
    {
        
            [HttpPost]
            public IActionResult SaveData(SaveDataModel model)
            {
                SaveDataModel data = new SaveDataModel
                {
                    Login = model.Login,
                    Znak = model.Znak,
                    CzasPrzytrzymania = model.CzasPrzytrzymania,
                    CzasDoNastepnegoZnaku = model.CzasDoNastepnegoZnaku
                };

                return View();
            }
        
    }
}
