import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Comment from './views/testreact'
import Menu from './views/menu'
import Test from './views/test'
import Test1 from './views/test1'
import Test2 from './views/test2'
import Repo from './views/Repo'


const routes = (
    <Route path="/" >
        <IndexRoute component={Comment}/>
        <Route path="menu" component={Menu} >
            <Route path="test" component={Test} />
            <Route path="test1" component={Test1} />
            <Route path="test2" component={Test2} />
            <Route path="/menu/:userName/:repoName" component={Repo} />
        </Route>
    </Route>
);
export default routes;
