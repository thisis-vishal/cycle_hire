import React from 'react';
import { BrowserRouter , Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';


function App() {
  return (
    <React.Fragment>
        <BrowserRouter>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/signup" exact>
            <Signup />
          </Route>
        </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
