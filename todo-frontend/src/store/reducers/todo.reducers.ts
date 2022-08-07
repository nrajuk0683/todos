import { ToDo } from '../../models/todo.model';
import {
    CREATE_TODO,
    MARK_TODO_AS_COMPLETED,
    LOAD_TODOS_IN_PROGRESS,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_FAILURE,
    MARK_TODO_AS_PENDING,
} from '../actions/Todo.actions';
export interface IData {
    isLoading: boolean,
    data: ToDo[]
}
const initialState: IData = { isLoading: false, data: [] };

export const todos = (state = initialState, action: any) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_TODO: {
            const { todo } = payload;
            return {
                ...state,
                data: state.data.concat(todo),
            };
        }
        case MARK_TODO_AS_COMPLETED: {
            const { todo: updatedTodo } = payload;
            return {
                ...state,
                data: state.data.map(todo => {
                    if (todo.id === updatedTodo.id) {
                        return updatedTodo;
                    }
                    return todo;
                }),
            };
        }
        case MARK_TODO_AS_PENDING: {
            const { todo: updatedTodo } = payload;
            return {
                ...state,
                data: state.data.map(todo => {
                    if (todo.id === updatedTodo.id) {
                        return updatedTodo;
                    }
                    return todo;
                }),
            };
        }
        case LOAD_TODOS_SUCCESS: {
            const { todos } = payload;
            return {
                ...state,
                isLoading: false,
                data: todos,
            };
        }
        case LOAD_TODOS_IN_PROGRESS:
            return {
                ...state,
                isLoading: true,
            }
        case LOAD_TODOS_FAILURE:
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state;
    }
}