import * as React from "react";
import okay from "./components/images/hero-img.png";
import HomeLayout from "./components/homeLayout";
import Button from "@mui/material/Button";
import GroupAvatars from "./components/avatarCollapse";
import BasicCard from "./components/descCard";
import Footer from "./components/footer";
import MyComponent from "../icons/right-arrow";
import { Link } from "react-router-dom";
import Features from "./components/features";
import heroImg2 from "./components/images/hero-img2.png";

const Home = () => {
  return (
    <>
      <HomeLayout />
      <div className="container-fluid" style={{ marginTop: "120px" }}>
        <div className="" style={{ marginBottom: "50px", marginLeft: "20px" }}>
          <h1 className="" style={{ color: "#172845" }}>
            QuickpayAfrica:{" "}
          </h1>
          <h1 className="" style={{ color: "#172845" }}>
            Your Destination for Authentic Wonders
          </h1>
        </div>

        <div className="row">
          <div
            className="col-md-6 text-center mt-5"
            style={{ fontSize: "28px" }}
          >
            <p className="mb-0">Seamless Transactions, Unique Treasures:</p>
            <p className="mb-5 mt-0">
              {" "}
              Navigating Africa’s rich cultural heritage
            </p>
            <div className="">
              <Button
                variant="contained"
                style={{
                  marginRight: "50px",
                  backgroundColor: "var(--bg-color)",
                  padding: "15px 40px ",
                  fontWeight: "bold",
                  fontSize: "18px",
                  borderRadius: "14px",
                }}
              >
                <span style={{ paddingRight: "15px" }}>
                  {" "}
                  <Link
                    to="/signIn"
                    style={{ textDecoration: "none", color: "var(--white)" }}
                  >
                    {" "}
                    Buyer{" "}
                  </Link>{" "}
                </span>
                <span className="ml-2">
                  <MyComponent />
                </span>
              </Button>
              <Button
                variant="outlined"
                style={{
                  marginRight: "50px",
                  backgroundColor: "var( --primary-color)",
                  border: "3px solid var(--bg-color)",
                  color: "var(--bg-color)",
                  padding: "12px 40px ",
                  fontWeight: "bold",
                  fontSize: "18px",
                  borderRadius: "14px",
                }}
              >
                <span style={{ paddingRight: "15px" }}>
                  {" "}
                  <Link
                    to="/signIn"
                    style={{ textDecoration: "none", color: "var(--bg-color)" }}
                  >
                    {" "}
                    Seller{" "}
                  </Link>{" "}
                </span>
                <span className="ml-2">
                  <MyComponent />
                </span>
              </Button>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src={okay}
              className="img-fluid"
              alt=""
              style={{ maxHeight: "400px" }}
            />
          </div>
        </div>
        <div
          className="mt-5 mb-5"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <GroupAvatars style={{ maxWidth: "100%", height: "auto" }} />
        </div>
        <div
          className="mt-5"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <BasicCard style={{ maxWidth: "600px" }} />
        </div>
      </div>{" "}
      <Features />
      <div className="text-center mt-5">
        <img
          src={heroImg2}
          alt=""
          style={{ width: "400px", borderRadius: "8px" }}
        />
      </div>
      <div className="text-center mt-4">
        <h2 className="mb-0" style={{ fontSize: "30px" }}>
          "No counterfeit transactions. Secure authentic purchases through our
          marketplaces."
        </h2>
        <p style={{ fontSize: "18px" }}>
          At QuickpayAfrica, we believe in quality over quantity.
        </p>
        <Button
          variant="outlined"
          style={{
            marginRight: "50px",
            backgroundColor: "var( --primary-color)",
            border: "3px solid var(--bg-color)",
            color: "var(--bg-color)",
            padding: "12px 40px ",
            fontWeight: "bold",
            fontSize: "18px",
            borderRadius: "14px",
          }}
        >
          Learn more
        </Button>
      </div>
      <Footer />
    </>
  );
};
export default Home;
