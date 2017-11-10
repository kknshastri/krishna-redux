import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './reducers/combined.reducer';
import App from './appComponent/app.component';

import './index.css';

const contactStore = createStore(allReducers);

ReactDOM.render(
    <Provider store={contactStore}>
        <App />
    </Provider>,
    document.getElementById('app-root-krishna')
);
