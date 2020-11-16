import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Resume from "./pages/Resume"

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Projects} />
        <Route exact path="/about" component={About} />
        <Route exact path="/resume" component={Resume} />
      </div>
    </Router>
  );
}

export default App;
