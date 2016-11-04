import React from 'react';
import ReactDom from 'react-dom';
import routes from './router';
import { Router, browserHistory } from 'react-router'
import './assets/index.css'

ReactDom.render(
    <Router routes={routes} history={browserHistory}/>,
    document.getElementById('app')
);
