import React from 'react';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App () {
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/home" component={HomePage}/>
                <Route path="/about" component={AboutPage}/>
            </Switch>
        </Router>
    )
}

export default App;