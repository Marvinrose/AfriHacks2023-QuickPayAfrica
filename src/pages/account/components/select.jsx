import { Link } from "react-router-dom";
import { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import MyComponent from "../../icons/right-arrow";

function ToggleButtonExample() {
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Buyer", value: "1" },
    { name: "Seller", value: "2" },
  ];

  return (
    <>
      <div className="">
        <ButtonGroup>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              // variant={idx % 2 ? "outline-success" : "outline-danger"}
              name="radio"
              className="button"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
              style={{
                backgroundColor:
                  radioValue === radio.value ? "#703A32" : "#F0DAD3",
                color: radioValue === radio.value ? "#F0DAD3" : "#703A32",
                borderColor: "brown",
              }}
            >
              {" "}
              <Link
                to="/products"
                style={{ color: "var(--white)", textDecoration: "none" }}
              >
                <span style={{ paddingRight: "15px" }}>
                  {" "}
                  <Link
                    to="/signIn"
                    style={{ textDecoration: "none", color: "var(--white)" }}
                  >
                    {" "}
                    {radio.name} <MyComponent />
                  </Link>{" "}
                </span>
              </Link>
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
    </>
  );
}

export default ToggleButtonExample;
