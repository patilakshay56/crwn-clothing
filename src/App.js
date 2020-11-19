import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route
        path='/hats'
        render={(props) => {
          console.log(props.match);
          return <h1>Hats</h1>;
        }}
      />
    </Switch>
  );
}

export default App;
