import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Home from "./Pages/Home";
import GlobalStyle from "./utilities/style/GlobalStyle";
import { ThemeProvider } from "./utilities/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HireMe from "./Components/HireMe";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <GlobalStyle />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hire" element={<HireMe />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
