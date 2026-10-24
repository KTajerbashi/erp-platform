var builder = DistributedApplication.CreateBuilder(args);

builder.AddProject<Projects.ERP_Platform_WebApi>("erp-platform-webapi");
builder.AddProject<Projects.ERP_Platform_WebApp>("erp-platform-webapp");

builder.Build().Run();
