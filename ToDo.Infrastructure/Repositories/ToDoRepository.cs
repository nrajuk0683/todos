using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ToDo.Entities.Models;
using ToDo.Infrastructure;
using ToDo.Infrastructure.Contracts;

namespace ToDo.Infrastructure.Repositories
{
    public class ToDoRepository : BaseRepository<ToDoItem>, IToDoRepository
    {
        protected readonly DbSet<ToDoItem> _dbSet;

        public ToDoRepository(ToDoDbContext context):base(context)
        {
            _dbSet = context.Set<ToDoItem>();
        }
    }
}
