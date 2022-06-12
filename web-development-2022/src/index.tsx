import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <div>
        Stuff
        <BrowserRouter basename={"/web-development-2022/"}>
            <App />
        </BrowserRouter>
    </div>,
    document.getElementById("root")
);
