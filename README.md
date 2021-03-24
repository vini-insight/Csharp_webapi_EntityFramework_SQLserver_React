# Csharp_webapi_EntityFramework_SQLserver_React
React C# WebAPI Entity Framework SQL Server NUnit Fluent Assertions Bogus NLog ASP NET core C Sharp .NET core dotNET core EF core SQL Server ReactJS Web API


para o projeto funcionar você deve inserir a string de conexão com banco de dados no arquivo appsettings.json

    {
    "ConnectionStrings": {
        "DefaultConnection": "Server=IP-or-DNS\\SQLEXPRESS;Database=DB-NAME;Trusted_Connection=True;"
    },
    "Logging": {
        "LogLevel": {
        "Default": "Information",
        "Microsoft": "Warning",
        "Microsoft.Hosting.Lifetime": "Information"
        }
        },
    "AllowedHosts": "*"
    }



projeto criado com o comando

    dotnet new react

Usando o modelo Code First do Enntity Framework

    [X] code first
    [ ] model first
    [ ] database first


Dependencias:

    dotnet add package Microsoft.AspNetCore.SpaServices.Extensions --version 3.1.1
    dotnet add package Microsoft.EntityFrameworkCore.SqlServer --version 3.1.1
    dotnet add package Microsoft.EntityFrameworkCore.Tools --version 3.1.1
    dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Design --version 3.1.1 (for aspenet-codegenerator)
    
EFcore --version 3.1.3 INSTALADO GLOBALMENTE:
    
    dotnet tool install --global dotnet-ef --version 3.1.3

MIGRATIONS AND UPDATE DATABASE

    dotnet ef migrations add CreateDatabase

    dotnet ef database update

tentar instalar globalmente


COMMANDS:

dotnet aspnet-codegenerator controller -name PessoaController -api -m Pessoa -dc DataContext -outDir Controllers

// optionsBuilder.UseMySql("Server=IP-or-DNS;Port=PORT-NUMBER;Database=DB-NAME;Uid=USER-NAME;Pwd=PASS-WORD;charset=utf8;");
// optionsBuilder.UseSqlServer(@"Server=IP-or-DNS\\SQLEXPRESS;Database=DB-NAME;Trusted_Connection=True;");


// "DefaultConnection": "Data Source=DESKTOP-HVNTI80\\DESENVOLVIMENTO;Initial Catalog=REACT_AULA_VALDIR;Integrated Security=False;User ID=sa;Password=1234;Connect Timeout=15;Encrypt=False;TrustServerCertificate=False"

