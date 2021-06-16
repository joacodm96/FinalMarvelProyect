import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { HomePage } from "./pages/home"
import { ComicPage } from "./pages/comic/"
import { GlobalLayout } from './styles/GlobalLayout'
import { PageLayout } from "./shared-components/Layout"
import { CharactersContainer } from "./shared-components/Layout/styled"



function App() {
  return (
    <Router>
      <GlobalLayout />
      <PageLayout>
        <Switch>
          <Route path="/comic/:comicId">
            <ComicPage />
          </Route>
          <Route path="/">
            <CharactersContainer >
              <HomePage />
            </CharactersContainer>
          </Route>
        </Switch>
      </PageLayout>
    </Router>
  );
}

export default App;