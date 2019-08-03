import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route,  BrowserRouter as Router, Switch } from 'react-router-dom'
import Beer from './Beer'
import BeerList from './BeerList'
import Notfound from './notfound'
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <Switch>
                <Route path="/beer/:id" component={Beer} />
                <Route path="/" component={BeerList} />
                <Route component={Notfound} />
            </Switch>
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
