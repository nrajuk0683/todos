using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using ToDo.Application.Models;
using ToDo.Entities.Models;

namespace ToDo.Application.Profiles
{
    public class ToDoProfile : Profile
    {
        public ToDoProfile()
        {
            CreateMap<ToDoItem, ToDoViewModel>();
            CreateMap<ToDoItem, ToDoForm>();

            CreateMap<ToDoViewModel,ToDoItem>();
            CreateMap<ToDoForm,ToDoItem>();
        }
    }
}
