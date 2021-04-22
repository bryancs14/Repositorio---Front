import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PosRouter from "./modules/pos/PosRouter";
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/invoice.css'
import './styles/index.css'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/pos">
          <PosRouter />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
