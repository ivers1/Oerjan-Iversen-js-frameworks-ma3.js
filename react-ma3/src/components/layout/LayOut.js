import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/layout/Home";
import News from "./components/layout/News";
import Login from "./components/layout/Login";

function LayOut(){
        return (
            <Router>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/News">News</Link></li>
                    <li><Link to="/Login">Login</Link></li>
                </ul>
            
            <Switch>
            <Route exact path="/"><Home /></Route>
          <Route path="/News"><News /></Route>
          <Route path="/Login"><Login /></Route>
        </Switch>
      </div>
    </Router>
    );
}

export default LayOut;