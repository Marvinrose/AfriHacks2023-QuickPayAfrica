import React from "react";

const Description = () => {
  return (
    <>
      <div className="container mt-3">
        <h1 className="" style={{ fontSize: "30px" }}>
          Ntooilo . Earthenwares
        </h1>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2 style={{ fontSize: "25px" }}>300 reviews 4.8</h2>
          <h2
            style={{
              fontWeight: "bold",
              color: "var(--bg-color)",
              fontSize: "25px",
            }}
          >
            $75
          </h2>
        </div>
        <div className="mt-5">
          <h2 style={{ fontSize: "25px" }}>Description</h2>
          <p>
            This is an earthen ware made out of pure south african clay. It
            carries in it a precious decendency of over 400 yrs with the people
            of Nbutu cheering its culture forever.{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Description;
