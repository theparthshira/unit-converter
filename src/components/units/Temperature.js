import React, { useState } from "react";
import "./Temperature.css";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default function Temperature() {
  const [unit1, changeU1] = useState(0);
  const [unit2, changeU2] = useState(0);
  const [type1, setType1] = useState("Celcius");
  const [type2, setType2] = useState("Fahrenheit");

  const onChangeHandle1 = event => {
    var curr_val = event.target.valueAsNumber;
    var ans;

    if (type1 === "Celcius") {
      if (type2 === "Celcius") {
        ans = curr_val;
      } else if (type2 === "Fahrenheit") {
        ans = curr_val * (9 / 5) + 32;
      } else {
        ans = curr_val + 273.15;
      }
    } else if (type1 === "Fahrenheit") {
      if (type2 === "Celcius") {
        ans = (curr_val - 32) * (5 / 9);
      } else if (type2 === "Fahrenheit") {
        ans = curr_val;
      } else {
        ans = (curr_val - 32) * (5 / 9) + 273.15;
      }
    } else {
      if (type2 === "Celcius") {
        ans = curr_val - 273.15;
      } else if (type2 === "Fahrenheit") {
        ans = (curr_val - 273.15) * (9 / 5) + 32;
      } else {
        ans = curr_val;
      }
    }

    changeU1(curr_val);
    changeU2(ans);
  };

  const onChangeHandle2 = event => {
    var curr_val = event.target.valueAsNumber;
    var ans;

    if (type2 === "Celcius") {
      if (type1 === "Celcius") {
        ans = curr_val;
      } else if (type1 === "Fahrenheit") {
        ans = curr_val * (9 / 5) + 32;
      } else {
        ans = curr_val + 273.15;
      }
    } else if (type2 === "Fahrenheit") {
      if (type1 === "Celcius") {
        ans = (curr_val - 32) * (5 / 9);
      } else if (type1 === "Fahrenheit") {
        ans = curr_val;
      } else {
        ans = (curr_val - 32) * (5 / 9) + 273.15;
      }
    } else {
      if (type1 === "Celcius") {
        ans = curr_val - 273.15;
      } else if (type1 === "Fahrenheit") {
        ans = (curr_val - 273.15) * (9 / 5) + 32;
      } else {
        ans = curr_val;
      }
    }

    changeU1(ans);
    changeU2(curr_val);
  };

  // console.log(type1);
  // console.log(type2);

  return (
    <>
      <div className="container">
        <div className="l-unit">
          <h2>Select Unit: </h2>
          <Dropdown as={ButtonGroup}>
            <Button variant="dark" onClick={e => setType1("Celcius")}>
              {type1}
            </Button>

            <Dropdown.Toggle split variant="dark" id="dropdown-split-basic" />

            <Dropdown.Menu>
              <Dropdown.Item onClick={e => setType1("Celcius")}>
                Celcius
              </Dropdown.Item>
              <Dropdown.Item onClick={e => setType1("Fahrenheit")}>
                Fahrenheit
              </Dropdown.Item>
              <Dropdown.Item onClick={e => setType1("Kelvin")}>
                Kelvin
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <br />

          <input
            type="number"
            className="l-input"
            value={unit1}
            onChange={onChangeHandle1}
          />
        </div>

        <div className="r-unit">
          <h2>Select Unit: </h2>
          <Dropdown as={ButtonGroup}>
            <Button variant="dark" onClick={e => setType2("Fahrenheit")}>
              {type2}
            </Button>

            <Dropdown.Toggle split variant="dark" id="dropdown-split-basic" />

            <Dropdown.Menu>
              <Dropdown.Item onClick={e => setType2("Celcius")}>
                Celcius
              </Dropdown.Item>
              <Dropdown.Item onClick={e => setType2("Fahrenheit")}>
                Fahrenheit
              </Dropdown.Item>
              <Dropdown.Item onClick={e => setType2("Kelvin")}>
                Kelvin
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <br />

          <input
            type="number"
            className="r-input"
            value={unit2}
            onChange={onChangeHandle2}
          />
        </div>
        <div className="d-red">Easy on the go Temperature converter!</div>
      </div>
    </>
  );
}
