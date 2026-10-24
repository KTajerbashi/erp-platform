var builder = DistributedApplication.CreateBuilder(args);

builder.AddProject<Projects.ERP_Platform_WebApi>("erp-platform-webapi");
builder.AddProject<Projects.ERP_Platform_WebApp>("erp-platform-webapp");
//builder.AddExecutable(
//    "erp-platform-angular",
//    "../../5.WebApp/ERP.Platform.WebApp/ClientApp",
//    "npm.cmd",
//    "run",
//    "start");

builder.AddExecutable(
    name: "erp-platform-angular",
    command: "npm.cmd",
    workingDirectory: "../../5.WebApp/ERP.Platform.WebApp/ClientApp",
    args: ["run", "start"]);

builder.Build().Run();
