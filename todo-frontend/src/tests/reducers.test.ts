// import React, { Component } from 'react';
// import App from '../App';
// import { render, screen } from '@testing-library/react';
// import ToDoList from '../components/ToDoList';
// // import App from '../App';

// // test('renders learn react link', () => {
// //   render(<App />);
// //   const linkElement = screen.getByText(/learn react/i);
// //   expect(linkElement).toBeInTheDocument();
// // });
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/lib/integration/react';
// import { configureStore } from './../store/store';
// import { persistStore } from 'redux-persist';
// const store = configureStore();
// const persistor = persistStore(store);
// test('test', async () => {
//   // expect(true).toBe(true);
//   render(<Provider store={store}>
//     <App />
//   </Provider>);
//   const linkElement = await screen.findByTestId('pendingTasks');
//   console.log(linkElement);
// })

import { todos } from './../store/reducers/todo.reducers';

describe('The todos reducer', () => {
  test('Adds a new todo when CREATE_TODO action is received', () => {
    const fakeTodo = { description: 'hello', statusId: 1 };
    const fakeAction = {
      type: 'CREATE_TODO',
      payload: {
        todo: fakeTodo,
      },
    };
    const originalState = { isLoading: false, data: [] };

    const expected = {
      isLoading: false,
      data: [fakeTodo],
    };
    const actual = todos(originalState, fakeAction);

    expect(actual).toEqual(expected);
  });
});