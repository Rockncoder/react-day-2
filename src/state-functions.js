import uuidv4 from 'uuid/v4'

export function toggleDone(state, id){
  const todos = state.todos.map(todo => {
    if(todo.id === id){
      todo.done = !todo.done;
    }
    return todo;
  });
  return {todos};
}

export function addTodo(state, todo){
  const newTodo = Object.assign(
    {}, todo, {
      id: uuidv4(),
      done: false
    }
  );
  return {
    todos: state.todos.concat([newTodo])
  }
}

export function deleteTodo(state, id){
  return {
    todos: state.todos.filter(todo => todo.id !== id)
  };
}

