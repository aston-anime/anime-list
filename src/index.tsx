import React from 'react';
import ReactDOM from 'react-dom/client';
import './bootstrap.min.css';
import './index.css';
import {Provider} from 'react-redux';
import {ErrorBoundary} from 'react-error-boundary';
import {App} from './components/App/App';
import {store} from './store';
import {ThemeProvider} from './services/theme/ThemeProvider';
import {ErrorPage} from './pages/Error-page/Error-page';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider>
                <ErrorBoundary FallbackComponent={ErrorPage}>
                    <App />
                </ErrorBoundary>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);
