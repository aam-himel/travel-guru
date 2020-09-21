import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/travel/Home';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Booking from './components/booking/Booking';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/booking/:place_id">
          <Booking />
        </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
