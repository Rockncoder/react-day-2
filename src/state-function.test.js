import {toggleDone} from './state-functions';

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