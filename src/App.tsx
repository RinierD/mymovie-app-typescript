import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './router/Home';
import Detail from './router/Details';


export interface Movie {
  id:number;
  year:string;
  medium_cover_image:string;
  title:string;
  summary:string;
  genres:string[];
}

function App() {
  return (
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
}

export default App;