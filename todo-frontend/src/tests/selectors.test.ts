import { getCompletedTodos } from './../store/selectors/todo.selectors';

describe('The getCompletedTodos selector', () => {
    test('Returns only completed todos', () => {
        const fakeTodos = [{
            description: 'task1',
            statusId: 2,
        }, {
            description: 'task2',
            statusId: 1,
        }, {
            description: 'task3',
            statusId: 1,
        }];
        const expected = [{
            description: 'task1',
            statusId: 2,
        }];
        const actual = getCompletedTodos.resultFunc(fakeTodos);
        expect(actual).toEqual(expected);
    });
});