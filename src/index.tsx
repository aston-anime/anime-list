import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './bootstrap.min.css';
import './index.css';
import {Provider} from 'react-redux';
import {App} from './components/App/App';
import {store} from './store';
import {ThemeProvider} from './services/theme/ThemeProvider';
import {Spinner} from './components/Spinner/Spinner';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider>
                <Suspense fallback={<Spinner />}>
                    <App />
                </Suspense>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);
