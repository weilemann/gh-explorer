import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import List from "./pages/List";
import Repository from "./pages/Repository";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={List} />
        <Route path="/repository/:repository+" component={Repository} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;