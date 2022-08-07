using Microsoft.EntityFrameworkCore;
using ToDo.Entities.Models;
//using ToDo.Data.Models;

namespace ToDo.Infrastructure
{
    public class ToDoDbContext : DbContext
    {
        public virtual DbSet<ToDoItem> ToDos { get; set; }
        public ToDoDbContext(DbContextOptions<ToDoDbContext> options) : base(options)
        {
        }
    }
}
