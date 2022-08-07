import React from 'react';
import styled from 'styled-components';
import ToDoList from './components/ToDoList';

const AppContainer = styled.div`
    margin: 1rem;
    font-family: Arial, Helvetica, sans-serif;
`;
const App = () => (
  <AppContainer>
    <ToDoList />
  </AppContainer>
);

export default (App);