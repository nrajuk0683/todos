import { createSelector } from 'reselect';

export const getTodos = (state: any) => state.todos.data;
export const getTodosLoading = (state: any) => state.todos.isLoading;

export const getIncompleteTodos = createSelector(
    getTodos,
    (todos) => todos.filter((todo: any) => todo.statusId !== 2),
);

export const getCompletedTodos = createSelector(
    getTodos,
    (todos) => todos.filter((todo: any) => todo.statusId === 2),
);
