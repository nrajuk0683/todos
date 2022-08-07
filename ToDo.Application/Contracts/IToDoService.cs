using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using ToDo.Application.Models;

namespace ToDo.Application.Contracts
{
    public interface IToDoService
    {
        Task<IEnumerable<ToDoViewModel>> GetToDos();
        Task<ToDoForm> AddToDo(ToDoForm todo);
        Task<ToDoForm> MarkAsCompleted(int id);
        Task<ToDoForm> MarkAsPending(int id);
    }
}
