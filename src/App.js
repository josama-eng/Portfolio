import React from "react";
import AboutMe from "./pages/AboutMe";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import Projects from "./pages/Projects";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutMe />
        </Route>
        <Route path="/Projects">
          <Projects />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
