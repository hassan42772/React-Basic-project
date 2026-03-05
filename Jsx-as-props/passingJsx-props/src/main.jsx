import { StrictMode } from 'react'
import PassingJsx from './components/PassingJsx.jsx'
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

