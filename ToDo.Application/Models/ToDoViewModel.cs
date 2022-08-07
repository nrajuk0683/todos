using System;
using System.Collections.Generic;
using System.Text;

namespace ToDo.Application.Models
{
    public class ToDoViewModel
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public int StatusId { get; set; }
    }
}
