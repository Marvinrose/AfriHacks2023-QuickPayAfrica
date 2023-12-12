import * as React from "react";
import okay from "./components/images/hero-img.png";
import HomeLayout from "./components/homeLayout";

const Home = () => {
  return (
    <>
      <HomeLayout />
      <div className="container-fluid" style={{ marginTop: "120px" }}>
        <h1 className="" style={{ color: "#172845" }}>
          QuickpayAfrica:{" "}
        </h1>
        <h1 className="" style={{ color: "#172845" }}>
          Your Destination for Authentic Wonders
        </h1>

        <p className="mb-0">Seamless Transactions, Unique Treasures:</p>
        <p className="mb-5 mt-0"> Navigating Africa’s rich cultural heritage</p>
      </div>{" "}
      <div>
        <img src={okay} className="img-fluid" height={300} width={1400} alt="" />
      </div>
      {/* </HomeLayout> */}
    </>
  );
};
export default Home;
