var application = WebApplication.CreateBuilder().Build();

application.UseDefaultFiles();
application.UseStaticFiles();

application.Run();