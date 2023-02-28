import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SearchBar from "./Search";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <SearchBar />
    </Router>
  </React.StrictMode>
);
