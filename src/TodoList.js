import React from 'react';
import uuidv4 from 'uuid/v4';
import AddTodo from './AddTodo';

export default class TodoList extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      todos: [
        {id: uuidv4(), name: 'Feed the cats', done: false},
        {id: uuidv4(), name: 'Wash the dishes', done: false},
        {id: uuidv4(), name: 'Write some code', done: false},
      ]
    }
  }

  addTodo = todo => {
    console.log('addTodo');
  };


  render() {
    return (
      <div>
        <AddTodo onNewTodo={todo => this.addTodo(todo)} />
        <h2>Todos:</h2>
      </div>
    )
  }
}
