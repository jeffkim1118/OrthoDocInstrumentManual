import React from "react";
import ReactDOM from "react-dom/client";
import { ActionCableProvider } from "react-actioncable-provider";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/Store";
import { Provider } from "react-redux";

export const API_WS_ROOT = "ws://localhost:3000/cable";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ActionCableProvider url={API_WS_ROOT}>
    <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>
  </ActionCableProvider>

  // <Provider store={store}>
  //   <BrowserRouter>
  //     <App />
  //   </BrowserRouter>
  // </Provider>
);
