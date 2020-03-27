import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store';

import App from './App';
import StateLoader from './storeLoader';

import './index.scss';

const target = document.querySelector('#root');
const stateLoader = new StateLoader();

store.subscribe(() => {
    stateLoader.saveState(store.getState());
});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    target
);
