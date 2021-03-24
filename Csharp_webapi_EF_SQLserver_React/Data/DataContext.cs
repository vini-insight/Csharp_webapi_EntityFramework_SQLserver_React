using Microsoft.EntityFrameworkCore;
using Models;

namespace Data
{
    public class DataContext : DbContext
    {
        public DbSet<Pessoa> Pessoa { get; set; }        
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            Database.EnsureCreated(); // assim não precisa usar migrations
        }
    }
}