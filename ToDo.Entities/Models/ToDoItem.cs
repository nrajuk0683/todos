using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;
namespace ToDo.Entities.Models
{
    public class ToDoItem
    {
        [Key]
        public int Id { get; set; }
        public string Description { get; set; }
        public int StatusId { get; set; }
    }
}
