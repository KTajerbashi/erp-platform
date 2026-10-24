namespace ERP.Platform.WebApi.Models;

public class ApiResponse<T>
{
    public bool IsSuccess { get; set; }
    public T? Data { get; set; }
    public string Message { get; set; } = "Success";
}