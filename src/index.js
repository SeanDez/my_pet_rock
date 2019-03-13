import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ConnectedApp from './App';
import * as serviceWorker from './serviceWorker';
import {ThemeProvider} from "styled-components";
import {Provider} from "react-redux";
import commonTheme from "./common/theme";
import store from "./common/rootReducer";

ReactDOM.render(
  <ThemeProvider theme={ commonTheme }>
    <Provider store={ store }>
      <ConnectedApp />
    </Provider>
  </ThemeProvider>
  , document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
