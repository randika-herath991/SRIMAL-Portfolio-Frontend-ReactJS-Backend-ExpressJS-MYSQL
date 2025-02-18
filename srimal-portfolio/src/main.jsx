if (typeof window.structuredClone === 'undefined') {
  window.structuredClone = (value) => {
    return JSON.parse(JSON.stringify(value));
  };
}

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./state/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);