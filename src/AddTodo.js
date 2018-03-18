import React from 'react';

export default class AddTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formInput: ''
    };
  }

  onChange = e => {
    this.setState({formInput: e.target.value});
  };

  onSubmit = e => {
    e.preventDefault();
    this.addIt();
  };

  addTodo = e => {
    e.preventDefault();
    this.addIt();
  };

  addIt() {
    const newTodoName = this.state.formInput.trim();
    if (newTodoName) {
      this.props.onNewTodo({
        name: newTodoName
      });
      this.setState({formInput: ''});
    }
  }

  render() {
    return (
      <form className="add-todo" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="What to do?"
          onChange={this.onChange}
          value={this.state.formInput}/>
        <button type='button' onClick={this.addTodo}>Add</button>
      </form>
    );
  }
}