import {
    createTodo,
    loadTodosInProgress,
    loadTodosSuccess,
    loadTodosFailure,
    markTodoAsCompleted,
    markTodoAsPending,
} from './../actions/Todo.actions';
const apiUrl: string = process.env.REACT_APP_API_URL === undefined ? '' : process.env.REACT_APP_API_URL;
export const loadTodos = () => async (dispatch: any) => {
    try {
        dispatch(loadTodosInProgress());
        const response = await fetch(apiUrl);
        const todos = await response.json();

        dispatch(loadTodosSuccess(todos));
    } catch (e: any) {
        dispatch(loadTodosFailure());
        dispatch(displayAlert(e));
    }
}

export const addTodoRequest = (description: any) => async (dispatch: any) => {
    try {
        const body = JSON.stringify({ description });
        const response = await fetch(apiUrl, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body,
        });
        const todo = await response.json();
        dispatch(createTodo(todo));
    } catch (e: any) {
        dispatch(displayAlert(e));
    }
}

export const markTodoAsCompletedRequest = (id: number) => async (dispatch: any) => {
    try {
        const response = await fetch(`${apiUrl}/${id}/completed`, {
            method: 'PATCH',
            body: ''
        });
        const updatedTodo = await response.json();
        dispatch(markTodoAsCompleted(updatedTodo));
    } catch (e: any) {
        dispatch(displayAlert(e));
    }
}
export const markTodoAsPendingRequest = (id: number) => async (dispatch: any) => {
    try {
        const response = await fetch(`${apiUrl}/${id}/pending`, {
            method: 'PATCH',
            body: ''
        });
        const updatedTodo = await response.json();
        dispatch(markTodoAsPending(updatedTodo));
    } catch (e: any) {
        dispatch(displayAlert(e));
    }
}
export const displayAlert = (text: string) => () => {
    alert(text);
};