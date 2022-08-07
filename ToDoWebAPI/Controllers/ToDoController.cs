using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using ToDo.Application.Contracts;
using ToDo.Application.Models;

namespace ToDoWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToDoController : ControllerBase
    {
        private readonly IToDoService _toDoService;
        public ToDoController(IToDoService toDoService)
        {
            _toDoService = toDoService;
        }
        [HttpPost]
        public async Task<IActionResult> AddToDo([FromBody] ToDoForm todo)
        {
            return Accepted(await _toDoService.AddToDo(todo));
        }
        [HttpPatch("{id:int}/completed")]
        public async Task<IActionResult> MarkAsCompleted(int id)
        {
            return Ok(await _toDoService.MarkAsCompleted(id));
        }
        [HttpPatch("{id:int}/Pending")]
        public async Task<IActionResult> MarkAsPending(int id)
        {
            return Ok(await _toDoService.MarkAsPending(id));
        }
        [HttpGet]
        public async Task<IActionResult> GetToDos()
        {
            return Ok(await _toDoService.GetToDos());
        }
    }
}
