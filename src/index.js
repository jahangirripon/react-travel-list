import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
// import FlashCard from "./FlashCard";
// import DCounter from "./DCounter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <FlashCard /> */}
    {/* <DCounter /> */}
  </React.StrictMode>
);
