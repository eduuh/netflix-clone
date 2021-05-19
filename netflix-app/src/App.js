import React from 'react';
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const user = null;

  return (
    <div className="App">
      
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
        <Switch>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
