import React from "react";
import leaf from "./images/leaf-logo.png";
import income from "./images/income-logo.png";
import pad from "./images/padlock-logo.png";
const Features = () => {
  return (
    <>
      <div className="text-center mt-5">
        <div>
          <img src={leaf} alt="" style={{ width: "50px" }} />
          <h1 className="mb-0" style={{ fontSize: "30px" }}>
            Genuine Purchases
          </h1>
          <p style={{ fontSize: "18px" }}>
            At QuickpayAfrica, we emphasis quality products over quantity.{" "}
          </p>
        </div>
        <div>
          <img src={income} alt="" style={{ width: "50px" }} />
          <h1 className="mb-0" style={{ fontSize: "30px" }}>
            Earn Daily income
          </h1>
          <p style={{ fontSize: "18px" }}>
            Your active presence = more earnings.{" "}
          </p>
        </div>
        <div>
          <img src={pad} alt="" style={{ width: "50px" }} />
          <h1 className="mb-0" style={{ fontSize: "30px" }}>
            Secure marketplace
          </h1>
          <p style={{ fontSize: "18px" }}>
            We have implemented “Escrow” an advanced measure to ensure your data
            safety
          </p>
        </div>
      </div>
    </>
  );
};
export default Features;
