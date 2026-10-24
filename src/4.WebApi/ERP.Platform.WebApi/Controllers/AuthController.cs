using ERP.Platform.WebApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace ERP.Platform.WebApi.Controllers;

public class AuthController : BaseController
{
    [HttpGet]
    [ProducesResponseType(typeof(ApiResponse<List<string>>), StatusCodes.Status200OK)]
    public async Task<IActionResult> Index(int second, CancellationToken cancellationToken)
    {
        try
        {
            await Task.Delay(1000 * second, cancellationToken);
            var data = new List<string> { "Index", "Success", "200", "GET" };
            return OkResponse(data);
        }
        catch (Exception ex)
        {
            throw ex;
        }
    }

    [HttpPost("login")]
    [ProducesResponseType(typeof(ApiResponse<string>), StatusCodes.Status200OK)]
    public async Task<IActionResult> Login()
    {
        await Task.Delay(1000);
        return OkResponse("Login Success");
    }
}