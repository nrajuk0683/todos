using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using ToDo.Application.Contracts;
using ToDo.Application.Models;
using ToDo.Entities.Models;
using ToDo.Infrastructure.Contracts;

namespace ToDo.Application.Services
{
    public class ToDoService : IToDoService
    {
        private readonly IToDoRepository _toDoRepository;
        private readonly IMapper _mapper;
        public ToDoService(IMapper mapper, IToDoRepository toDoRepository)
        {
            _mapper = mapper;
            _toDoRepository = toDoRepository;
        }
        public async Task<ToDoForm> AddToDo(ToDoForm todo)
        {
            var dbTodo = _mapper.Map<ToDoItem>(todo);
            await _toDoRepository.AddAsync(dbTodo);
            var addedToDo = _mapper.Map<ToDoForm>(dbTodo);
            return addedToDo;
        }

        public async Task<IEnumerable<ToDoViewModel>> GetToDos()
        {
            return _mapper.Map<IEnumerable<ToDoViewModel>>(await _toDoRepository.GetAllAsync());
        }

        public async Task<ToDoForm> MarkAsCompleted(int id)
        {
            var updatedToDo = await UpdateToDoStatus(id, 2);
            return updatedToDo;
        }

        public async Task<ToDoForm> MarkAsPending(int id)
        {
            var updatedToDo = await UpdateToDoStatus(id,1);
            return updatedToDo;
        }
        private async Task<ToDoForm> UpdateToDoStatus(int id,int statusId)
        {
            var dbRecord = await _toDoRepository.GetByIdAsync(id);
            dbRecord.StatusId = statusId;
            _toDoRepository.Update(dbRecord);
            var updatedToDo = _mapper.Map<ToDoForm>(dbRecord);
            return updatedToDo;
        }
        private async Task<ToDoForm> GetToDo(int id)
        {
            return _mapper.Map<ToDoForm>(await _toDoRepository.GetByQueryAsync(x => x.Id == id));
        }
    }
}