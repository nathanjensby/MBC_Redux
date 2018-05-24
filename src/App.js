import React from "react";
import { Route, Link } from "react-router-dom";
import IngredientsContainer from "./containers/ingredientsContainer.js";

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
    </header>

    <main>
      <Route exact path="/" component={IngredientsContainer} />
    </main>
  </div>
);

export default App;
