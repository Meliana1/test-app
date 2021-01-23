import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware} from 'redux';
import allReducers from './Views/components/Reducer';
import { unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';
import {Provider} from 'react-redux';
import thunk from "redux-thunk"
import {ThemeProvider } from '@material-ui/core/styles';

const TempStore = createStore(allReducers, applyMiddleware(thunk));
const theme = unstable_createMuiStrictModeTheme();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={TempStore}>
      <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
