import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import App from "./component/App";
import reducers from "./reducers";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript

const store = createStore(reducers, applyMiddleware(thunk));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
