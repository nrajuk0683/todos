import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { ToDo } from '../models/todo.model';

import {
    getTodosLoading,
    getCompletedTodos,
    getIncompleteTodos,
} from './../store/selectors/todo.selectors';
import { loadTodos, markTodoAsPendingRequest, markTodoAsCompletedRequest } from './../store/thunks/todo.thunks';
import ToDoForm from './ToDoForm';
import ToDoListItem from './ToDoListItem';

const ListWrapper = styled.div`
    max-width: 700px;
    margin: auto;
`;
export interface IState {
    completedTodos: any,
    incompleteTodos: any,
    onPendingPressed: any,
    onCompletedPressed: any,
    isLoading: any,
    startLoadingTodos: any
}
const TodoList: React.FC<IState> = ({ completedTodos, incompleteTodos, onPendingPressed, onCompletedPressed, isLoading, startLoadingTodos }) => {
    useEffect(() => {
        startLoadingTodos();
    }, []);

    const loadingMessage = <div>Loading todos...</div>;
    const content = (
        <ListWrapper>
            <ToDoForm />
            <h3 data-testid="pendingTasks">Pending Tasks:</h3>
            {incompleteTodos.map((todo: ToDo) => <ToDoListItem key={todo.id}
                todo={todo}
                onPendingPressed={onPendingPressed}
                onCompletedPressed={onCompletedPressed} />)}
            <h3>Completed Tasks:</h3>
            {completedTodos.map((todo: ToDo) => <ToDoListItem key={todo.id}
                todo={todo}
                onPendingPressed={onPendingPressed}
                onCompletedPressed={onCompletedPressed} />)}
        </ListWrapper>
    );
    return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state: any) => ({
    isLoading: getTodosLoading(state),
    completedTodos: getCompletedTodos(state),
    incompleteTodos: getIncompleteTodos(state),
});

const mapDispatchToProps = (dispatch: any) => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onPendingPressed: (id: number) => dispatch(markTodoAsPendingRequest(id)),
    onCompletedPressed: (id: number) => dispatch(markTodoAsCompletedRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);