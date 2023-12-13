import React from "react";
import CardSelector from "./select";
import ButtonAppBar from "../../home/components/homeNav";
import Footer from "../../home/components/footer";

const Type = () => {
  return (
    <>
      <ButtonAppBar />
      <div className="container col-lg-4 " style={{ marginTop: "200px" }}>
        <CardSelector />
      </div>
      <Footer />
    </>
  );
};

export default Type;
