import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Home } from "./pages/home/index"
import { StyledHomePageLayout } from "./styles/layout"

//ACA ENRUTAMOS TODOS NUESTROS COMPONENTES 
//StyledHomePageLayout (estilo general para la primer pantalla)
//Home

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
