import React from "react";
import { Route, Link } from "react-router-dom";
import MainContentWrapper from "./components/mainContentWrapper.js";

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
    </header>

    <main>
      <Route exact path="/" component={MainContentWrapper} />
    </main>
  </div>
);

export default App;
