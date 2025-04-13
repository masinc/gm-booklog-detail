import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const buyButtonParent = document.querySelector("div#main div.bookstore-btn-area");

if (!buyButtonParent) {
  throw new Error("div.btn-others Element is not found");
}

ReactDOM.createRoot(
  (() => {
    const app = document.createElement("div");
    buyButtonParent.appendChild(app);
    return app;
  })(),
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
