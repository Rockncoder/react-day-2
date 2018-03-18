import {toggleDone, addTodo} from './state-functions';

describe('Tests toggleDone', () => {
  describe('when given an incomplete todo', () => {
    it('marks the todo as complete', () => {
      const startState = {
        todos: [{id: 1, done: false, name: 'Write some code'}]
      };
      const finishedState = toggleDone(startState, 1);

      expect(finishedState.todos).toEqual([{id: 1, done: true, name: 'Write some code'}]);
    });
  });
});

describe('Tests addTodo', () => {
  describe('when given an new todo', () => {
    it('adds the todo to the list', () => {
      const startState = {
        todos: []
      };
      const finishedState = addTodo(startState, {name: 'Write unit test'});

      expect(finishedState.todos).toHaveLength(1);
      expect(finishedState.todos[0]).toHaveProperty('id');
      expect(finishedState.todos[0]).toHaveProperty('name');
      expect(finishedState.todos[0]).toHaveProperty('done');
      expect(finishedState.todos[0].done).toBeFalsy();
      expect(finishedState.todos[0].name).toEqual('Write unit test');
    });
  });
});