import React from 'react';
import renderer from 'react-test-renderer';
import AddTodo from './AddTodo';

it('AddTodo renders without crashing', () =>{
  const rendered = renderer.create(<AddTodo />).toJSON();

  expect(rendered).toBeTruthy();
});