import React from "react";
import "./Main.css";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <>
      <div className="main-head">Please select unit from below:</div>
      <div className="main-dropdown">
        <Dropdown>
          <Dropdown.Toggle variant="dark" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu id="main-down">
            <Dropdown.Item href="">
              <Link to="/length">Length</Link>
            </Dropdown.Item>
            <Dropdown.Item href="">
              <Link to="/currency">Currency</Link>
            </Dropdown.Item>
            <Dropdown.Item href="">
              <Link to="/temperature">Temperature</Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
}
