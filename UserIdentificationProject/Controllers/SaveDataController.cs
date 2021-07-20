using Microsoft.AspNetCore.Mvc;
using UserIdentificationProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using Newtonsoft.Json;
using UserIdentificationProject.Data;

namespace UserIdentificationProject.Controllers
{
    public class SaveDataController : Controller
    {
        private readonly AppDBContext _db;

        public SaveDataController(AppDBContext db)
        {
            _db = db;
        }
        public IActionResult GetData(string function_param)
        {
            dynamic func_param = JsonConvert.DeserializeObject(function_param);
            SaveDataModel data = new SaveDataModel
            {
                Key = func_param.keyASCII,
                NextKeyTime = func_param.nextKeyTime,
                KeyDownTime = func_param.keyDownTime,
                Login = func_param.login
            };

            _db.Data.Add(data);
            _db.SaveChanges();
            return null;
        }  
    }
}
