import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Home } from "./pages/home"
import { StyledHomePageLayout } from "./styles/layout"

export default function App() {
  return (
    <Router>
      <StyledHomePageLayout>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </StyledHomePageLayout>
    </Router>
  );
}
