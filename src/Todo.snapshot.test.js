import Todo from './Todo';
import renderer from 'react-test-renderer';
import React from 'react';

test('Todo component renders the todo correctly', () => {
  const todo = {id: 1, done: false, name: 'Write more code'};
  const rendered = renderer.create(<Todo todo={todo} />);

  expect(rendered.toJSON()).toMatchSnapshot();
});