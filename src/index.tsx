import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './bootstrap.min.css';
import './index.css';
import {Provider} from 'react-redux';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
                    <ToastContainer />
                    <App />
                </Suspense>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);
