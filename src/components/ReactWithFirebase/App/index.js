import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navigation from "../Navigation";

const App = () => {
  return (
    <Router>
      React with Firebase App
      <Navigation />
    </Router>
  );
};

export default App;
