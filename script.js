function Todo({ todo, onDelete, onToggle }) {
  return (
    <li>
      <input type="checkbox" checked={todo.checked} onChange={onToggle} />
      <button onClick={onDelete}>Delete</button>
      <span>{todo.text}</span>
    </li>
  );
}

let id = 0;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { id: 997, text: "task 1", checked: true },
        { id: 998, text: "task 2", checked: false },
        { id: 999, text: "task 3", checked: true },
      ],
    };
  }

  addTodo() {
    const text = prompt("add Todo");
    this.setState({
      todos: [...this.state.todos, { id, text }],
    });
    id++;
  }

  deleteTodo(id) {
    this.setState({ todos: this.state.todos.filter((todo) => todo.id !== id) });
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      ),
    });
  }

  render() {
    return (
      <div>
        <h2>My Todo app</h2>
        <p>Item count: {this.state.todos.length} </p>
        <p>
          Unchecked count:{" "}
          {this.state.todos.filter((todo) => !todo.checked).length}{" "}
        </p>
        <button onClick={() => this.addTodo()}>New TODO</button>
        <ul>
          {this.state.todos.map((todo) => (
            <Todo
              todo={todo}
              key={todo.id}
              onDelete={() => this.deleteTodo(todo.id)}
              onToggle={() => this.toggleTodo(todo.id)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("mydiv"));
