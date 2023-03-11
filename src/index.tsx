import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from './router/Details';
import Home from './router/Home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Router>
        <Switch>
          <Route path="/abot-us">
            <h1>Hello</h1>
          </Route>
          <Route path="/movie/:id">
            <Detail />
          </Route>
          <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
);
