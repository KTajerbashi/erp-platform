using ERP.Platform.WebApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;

namespace ERP.Platform.WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public abstract class BaseController : Controller
    {
        protected OkObjectResult OkResponse<T>(T? value, string message = "Success")
            => Ok(new ApiResponse<T>
            {
                IsSuccess = true,
                Data = value,
                Message = message
            });
    }
}
