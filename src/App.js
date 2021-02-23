import React, { Component } from "react";
// import HackerNewsAPI from "./components/HackerNews/HackerNewsAPI";
import Todos from "./components/TodoApp/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/TodoApp/AddTodo";

import "./App.css";

import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Todo one",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Todo two",
        completed: false,
      },
      {
        id: uuidv4(),
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

  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <div>
        <div className="container">
          <Header />
          {/* <HackerNewsAPI></HackerNewsAPI> */}
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
