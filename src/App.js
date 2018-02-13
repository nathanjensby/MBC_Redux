import React from "react";
import { Route, Link } from "react-router-dom";
import HomeContainer from "./containers/homeContainer.js";

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
    </header>

    <main>
      <Route exact path="/" component={HomeContainer} />
    </main>
  </div>
);

export default App;
