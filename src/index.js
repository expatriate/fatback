import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './helpers/store';
import { App } from './App';

// setup fake backend
import { configureFakeBackend } from './helpers/fake-backend';
configureFakeBackend();

const target = document.querySelector('#root')

render(
    <Provider store={store}>
        <App />
    </Provider>,
    target
);