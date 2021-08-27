import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Landing from '../landing/Landing.jsx';


export default function App() {
  return (
    <>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={Landing} />
        {/* <Route exact path="/home" component={Home} />
        <Route exact path="/sprints/:id" component={Sprint} />
        <Route exact path="sprints/sprint_id/:id" component={Pitch} /> */}
        <Redirect to="/" />
      </Switch>
    </>
  );
}