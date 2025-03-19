import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./accStyle.css";
import App from "./components/App";
// import FlashCard from "./FlashCard";
// import DCounter from "./DCounter";
import Accordion from "./components/Accordion";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Accordion />
    {/* <FlashCard /> */}
    {/* <DCounter /> */}
  </React.StrictMode>
);
