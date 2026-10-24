using Microsoft.AspNetCore.Mvc;

namespace ERP.Platform.WebApi.Controllers
{
    public class AuthController : BaseController
    {
        [HttpGet]
        public async Task<IActionResult> Index()
        {
            await Task.Delay(1000);
            return Ok("Index Success");
        }

        [HttpPost]
        public async Task<IActionResult> Login()
        {
            await Task.Delay(1000);
            return Ok("Login Success");
        }
    }
}
