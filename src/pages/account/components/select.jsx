import { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

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
                backgroundColor: radioValue === radio.value ? "brown" : "white",
                color: radioValue === radio.value ? "white" : "brown",
                borderColor: "brown",
              }}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
    </>
  );
}

export default ToggleButtonExample;
