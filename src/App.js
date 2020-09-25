import React, { createContext, useState } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/travel/Home';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Booking from './components/booking/Booking';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Hotel from './components/hotel/Hotel';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

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

        <Route path="/signin">
          <SignIn/>
        </Route>

        <Route  path="/signup">
          <SignUp />
        </Route>

        <PrivateRoute  path="/hotel">
          <Hotel />
        </PrivateRoute>

        <Route  path="/booking">
          <Booking />
        </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
