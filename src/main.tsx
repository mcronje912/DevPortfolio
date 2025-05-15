// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom"; // Use HashRouter instead

import App from "./App.tsx";
import { Provider } from "./provider.tsx";
import "@/styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter> {/* Use HashRouter for GitHub Pages - it's more reliable */}
      <Provider>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
);