import React, { createContext, useState } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/travel/Home';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Booking from './components/booking/Booking';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Hotel from './components/hotel/Hotel';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className="App">

      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Navbar />
        <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/booking/:place_id">
          <Booking />
        </Route>

        <Route exact path="/signin">
          <SignIn/>
        </Route>

        <Route exact path="/signup">
          <SignUp />
        </Route>

        <Route exact path="/hotel">
          <Hotel />
        </Route>

        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
