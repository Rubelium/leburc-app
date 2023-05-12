import './css/index.css';
import { NextUIProvider } from '@nextui-org/react';
import { NextUiProviderTheme } from './objects/NextUiProviderTheme';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <NextUIProvider theme={NextUiProviderTheme}>
      <App />
    </NextUIProvider>
  </React.StrictMode>
);

reportWebVitals();