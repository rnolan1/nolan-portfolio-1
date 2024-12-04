import React, { StrictMode } from 'react'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
);
