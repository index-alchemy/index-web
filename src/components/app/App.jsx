import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Landing from '../landing/Landing.jsx';
import SprintList from '../home/SprintList';
import SprintPage from '../sprint/SprintPage';
import PitchPage from '../pitch/PitchPage';
import PitchForm from '../pitch/PitchForm';
import Search from '../../search/Search';


export default function App() {
  return (
    <>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={SprintList} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/sprints/:id" component={SprintPage} />
        <Route exact path="/pitches/:id" component={PitchPage} />
        <Route exact path="/add-pitch" component={PitchForm} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}