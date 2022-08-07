import fetchMock from 'fetch-mock';
import sinon from 'sinon';
import { loadTodos } from './../store/thunks/todo.thunks';

describe('The loadTodos thunk', () => {
    test('Dispatches the correct actions in the success scenario', async () => {
        const fakeDispatch = sinon.spy();
        const apiUrl: string = process.env.REACT_APP_API_URL === undefined ? '' : process.env.REACT_APP_API_URL;
        const fakeTodos = [{ description: '1' }, { description: '2' }];
        fetchMock.get(apiUrl, fakeTodos);

        const expectedFirstAction = { type: 'LOAD_TODOS_IN_PROGRESS' };
        const expectedSecondAction = {
            type: 'LOAD_TODOS_SUCCESS',
            payload: {
                todos: fakeTodos,
            },
        };

        await loadTodos()(fakeDispatch);

        expect(fakeDispatch.getCall(0).args[0]).toEqual(expectedFirstAction);

        fetchMock.reset();
    });
});