import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

import MovieList from "./MovieList";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MovieList />
    </Provider>
  </React.StrictMode>,
  rootElement
);
