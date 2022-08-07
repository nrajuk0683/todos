import { ToDo } from "../../models/todo.model";

export const CREATE_TODO = 'CREATE_TODO';
export const createTodo = (todo: ToDo) => ({
    type: CREATE_TODO,
    payload: { todo },
});

export const MARK_TODO_AS_COMPLETED = 'MARK_TODO_AS_COMPLETED';
export const markTodoAsCompleted = (todo: ToDo) => ({
    type: MARK_TODO_AS_COMPLETED,
    payload: { todo },
});
export const MARK_TODO_AS_PENDING = 'MARK_TODO_AS_PENDING';
export const markTodoAsPending = (todo: ToDo) => ({
    type: MARK_TODO_AS_PENDING,
    payload: { todo },
});
export const LOAD_TODOS_IN_PROGRESS = 'LOAD_TODOS_IN_PROGRESS';
export const loadTodosInProgress = () => ({
    type: LOAD_TODOS_IN_PROGRESS,
});

export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';
export const loadTodosSuccess = (todos: ToDo[]) => ({
    type: LOAD_TODOS_SUCCESS,
    payload: { todos },
});

export const LOAD_TODOS_FAILURE = 'LOAD_TODOS_FAILURE';
export const loadTodosFailure = () => ({
    type: LOAD_TODOS_FAILURE,
});