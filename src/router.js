import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Home from './views/Home'
import About from './views/About'


const routes = (
    <Router history={hashHistory}>
        <Route path="/" >
            <IndexRoute component={Home}/>
            <Route path="about" component={About}/>
        </Route>
    </Router>
);
export default routes;
