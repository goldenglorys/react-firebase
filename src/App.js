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
  render() {
    return (
      <div>
        {/* <HackerNewsAPI></HackerNewsAPI> */}
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
