import React from 'react';

export default class Todo extends React.Component {
  toggleDone = () => {
    this.props.doneChange(this.props.todo.id);
  };

  onClick = e => {
    e.preventDefault();
    this.props.deleteTodo(this.props.todo.id);
  };

  render() {
    const {todo} = this.props;
    const className = todo.done? 'done-todo': '';
    return (
      <div className={`todo ${className} todo-${todo.id}`}>
        <span className="toggle-todo" onClick={this.toggleDone}>
          {todo.name}
        </span>
        <button className="delete-todo" onClick={this.onClick}>Delete</button>
      </div>
    );
  }
}