import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Projects} />
        <Route exact path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
