using Microsoft.AspNetCore.Mvc;

namespace ERP.Platform.WebApi.Controllers
{
    public class AuthController : BaseController
    {
        [HttpGet]
        public async Task<IActionResult> Index()
        {
            await Task.Delay(1000);
            var data = new List<string>();
            data.Add("Index");
            data.Add("Success");
            data.Add("200");
            data.Add("GET");
            return Ok(data);
        }

        [HttpPost]
        public async Task<IActionResult> Login()
        {
            await Task.Delay(1000);
            return Ok("Login Success");
        }
    }
}
