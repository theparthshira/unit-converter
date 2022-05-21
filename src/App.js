import React from "react";
import "./App.css";
import Main from "./components/Main.js";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Length from "./components/units/Length.js";
import Currency from "./components/units/Currency.js";
import Temperature from "./components/units/Temperature.js";

function App() {
  return (
    <Router>
      <Main className="main" />
      <div>
        <Routes>
          <Route path="/length" element={<Length />} />
          <Route path="/currency" element={<Currency />} />
          <Route path="/temperature" element={<Temperature />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
