// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './stores/store';
import { Provider, useSelector } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material';
import CustomTheme from './assets/styles/CustomTheme';
import './App.css';

const AppWrapper = () => {
  const selectedTheme = useSelector((state: { auth: { theme: 'light' | 'dark' } }) => state.auth.theme);
  const theme = createTheme(CustomTheme(selectedTheme));

  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  </React.StrictMode>,
);
