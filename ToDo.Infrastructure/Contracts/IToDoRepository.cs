using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using ToDo.Entities.Models;

namespace ToDo.Infrastructure.Contracts
{
    public interface IToDoRepository:IBaseRepository<ToDoItem>
    {
    }
}
