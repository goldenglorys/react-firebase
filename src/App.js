import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import HackerNewsAPI from "./components/HackerNews/HackerNewsAPI";
// import Todos from "./components/TodoApp/Todos";
import Header from "./components/layout/Header";
// import AddTodo from "./components/TodoApp/AddTodo";
import TodoApp from "./components/TodoApp/TodoApp";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        {/* <HackerNewsAPI></HackerNewsAPI> */}
        <TodoApp />
      </Router>
    );
  }
}

export default App;
