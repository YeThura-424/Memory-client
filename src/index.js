import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from "redux";
import {thunk} from 'redux-thunk';
import reducers from './reducers';
import { ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.createRoot(document.getElementById("root"), HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
      </ThemeProvider>
  </React.StrictMode>
);
