import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../header/Header';
import Landing from '../landing/Landing';
import SprintList from '../home/SprintList';
import SprintPage from '../sprint/SprintPage';
import PitchPage from '../pitch/PitchPage';

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={SprintList} />
        <Route exact path="/sprints/:id" component={SprintPage} />
        <Route exact path="/pitches/:id" component={PitchPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};
