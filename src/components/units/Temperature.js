import React, { useState } from "react";
import "./Temperature.css";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default function Temperature() {
  const { unit1, changeU1 } = useState(0);
  const { unit2, changeU2 } = useState(0);

  console.log(unit1);
  console.log(unit2);

  const changeUnit1 = value => {
    changeU1(prev => value);
  };

  const changeUnit2 = value => {
    changeU2(prev => value);
  };

  return (
    <>
      <div class="vl"></div>
      <div class="container">
        <div class="l-unit">
          <h2>Select Unit: </h2>
          <Dropdown as={ButtonGroup}>
            <Button variant="dark">Celcius</Button>

            <Dropdown.Toggle split variant="dark" id="dropdown-split-basic" />

            <Dropdown.Menu>
              <Dropdown.Item>Celcius</Dropdown.Item>
              <Dropdown.Item>Fahrenheit</Dropdown.Item>
              <Dropdown.Item>Kelvin</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <br />

          <input
            type="number"
            className="l-input"
            value={unit1}
            onChange={changeUnit1}
          />
        </div>

        <div class="r-unit">
          <h2>Select Unit: </h2>
          <Dropdown as={ButtonGroup}>
            <Button variant="dark">Fahrenheit</Button>

            <Dropdown.Toggle split variant="dark" id="dropdown-split-basic" />

            <Dropdown.Menu>
              <Dropdown.Item>Celcius</Dropdown.Item>
              <Dropdown.Item>Fahrenheit</Dropdown.Item>
              <Dropdown.Item>Kelvin</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <br />

          <input
            type="number"
            className="r-input"
            value={unit2}
            onChange={changeUnit2}
          />
        </div>
      </div>
    </>
  );
}
