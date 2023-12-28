import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Home from "./Pages/Home";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
 body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #1F252F;
    color: white;
    font-family: 'Poppins', sans-serif;
  }
`;
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Home />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
