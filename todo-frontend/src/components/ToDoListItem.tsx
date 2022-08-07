import React from 'react';
import styled from 'styled-components';
import { ToDo } from '../models/todo.model';

const TodoItemContainer = styled.div`
    margin-top: 2px;
    padding: 5px;
    position: relative;
    border: 1px solid #ddd;
    border-radius: 8px;
`;

const ButtonsContainer = styled.div`
    position: absolute;
    right: 12px;
    bottom: 12px;
`;

const Button = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    display: inline-block;
`;

const CompletedButton = styled(Button)`
    background-color: #22ee22;
    width:180px;
`;

const PendingButton = styled(Button)`
    background-color: #22ee22;
    width:180px;
`;
export interface IState {
    todo: ToDo,
    onPendingPressed: any,
    onCompletedPressed: any
}
const TodoListItem: React.FC<IState> = ({ todo, onPendingPressed, onCompletedPressed }) => {
    const Container = TodoItemContainer;
    return (
        <Container>
            <p>{todo.description}</p>
            <ButtonsContainer>
                {todo.statusId === 2
                    ? <PendingButton
                        onClick={() => onPendingPressed(todo.id)}
                        className="remove-button">Mark As Pending</PendingButton>
                    : <CompletedButton
                        onClick={() => onCompletedPressed(todo.id)}
                        className="completed-button">Mark As Completed</CompletedButton>}

            </ButtonsContainer>
        </Container>
    );
}

export default TodoListItem;