import React from 'react';
import uuidv4 from 'uuid/v4';
import AddTodo from './AddTodo';
import Todo from './Todo';
import {toggleDone, addTodo, deleteTodo} from './state-functions';

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
    this.setState(addTodo(this.state, todo));
  };

  renderTodos(){
    return this.state.todos.map(todo => (
      <li key={todo.id}>
        <Todo
          todo={todo}
          doneChange={id => this.toggleDone(id)}
          deleteTodo={id => this.deleteTodo(id)}
        />
      </li>
    ));
  }

  render() {
    return (
      <div>
        <AddTodo onNewTodo={todo => this.addTodo(todo)} />
        <h2>Todos:</h2>
        <ul className="todos-list">
          {this.renderTodos()}
        </ul>
      </div>
    )
  }
}
