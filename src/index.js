import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import useRouter from './routes/index';
import { Provider } from 'react-redux';
import store from './redux/store';
import SettingsProvider from './contexts/SettingContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <SettingsProvider>
        <BrowserRouter>
    
            <App />

        </BrowserRouter>
      </SettingsProvider>
 
    </Provider>
  </React.StrictMode>
);
