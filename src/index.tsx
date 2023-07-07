import React from 'react';
import ReactDOM from 'react-dom/client';
import './bootstrap.min.css';
import './index.css';
import {Provider} from 'react-redux';
import {App} from './components/App/App';
import {store} from './store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
