import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getTodos } from './../store/selectors/todo.selectors';
import { addTodoRequest } from './../store/thunks/todo.thunks';
import { ToDo } from './../models/todo.model';
const FormContainer = styled.div`
    padding: 16px;
    text-align: center;
    border: 1px solid #ddd;
`;

const NewTodoInput = styled.input`
    font-size: 16px;
    padding: 8px;
    border: none;
    border: 1px solid #ddd;
    border-radius: 8px;
    width: 70%;
    outline: none;
`;

const NewTodoButton = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    margin-left: 8px;
    width: 20%;
    background-color: #22ee22;
`;
export interface IState {
    todos: ToDo[],
    onCreatePressed: any
}
const ToDoForm: React.FC<IState> = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <FormContainer>
            <NewTodoInput
                type="text"
                placeholder="Enter todo task"
                value={inputValue}
                onChange={(e: any) => setInputValue(e.target.value)} />
            <NewTodoButton
                onClick={() => {
                    const isDuplicateText =
                        todos.some(todo => todo.description === inputValue);
                    if (!isDuplicateText && inputValue !== "") {
                        onCreatePressed(inputValue);
                        setInputValue('');
                    }
                }}>
                Create Todo
            </NewTodoButton>
        </FormContainer>
    );
};

const mapStateToProps = (state: any) => ({
    todos: getTodos(state),
});

const mapDispatchToProps = (dispatch: any) => ({
    onCreatePressed: (description: string) => dispatch(addTodoRequest(description)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoForm);