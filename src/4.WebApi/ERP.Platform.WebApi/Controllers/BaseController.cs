using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;

namespace ERP.Platform.WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public abstract class BaseController : Controller
    {
        public override OkObjectResult Ok([ActionResultObjectValue] object? value)
        {
            return base.Ok(new
            {
                isSuccess = true,
                data = value,
                message = "Success"
            });
        }

    }
}
