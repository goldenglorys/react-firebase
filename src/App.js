import React, { Component } from "react";
// import HackerNewsAPI from "./components/HackerNews/HackerNewsAPI";
import Todos from "./components/TodoApp/Todos";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Todo one",
        completed: false,
      },
      {
        id: 2,
        title: "Todo two",
        completed: false,
      },
      {
        id: 3,
        title: "Todo three",
        completed: false,
      },
    ],
  };

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  render() {
    return (
      <div>
        {/* <HackerNewsAPI></HackerNewsAPI> */}
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}

export default App;
