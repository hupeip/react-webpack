import React from 'react';
import ReactDom from 'react-dom';
import routes from './router';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './redux/reducer/reducer'
import './assets/index.css'

let store = createStore(todoApp)

ReactDom.render(
    <Provider store={store}>
        {routes}
    </Provider>,
    document.getElementById('app')
);
