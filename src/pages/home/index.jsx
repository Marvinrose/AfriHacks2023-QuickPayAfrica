import * as React from "react";
import okay from "./components/images/hero-img.png";
import HomeLayout from "./components/homeLayout";
import Button from "@mui/material/Button";
import GroupAvatars from "./components/avatarCollapse";
import BasicCard from "./components/descCard";

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
                Contained
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
                Outlined
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
        <div className="" style={{ display: "flex", justifyContent: "center" }}>
          <BasicCard style={{ maxWidth: "600px" }} />
        </div>
      </div>{" "}
      {/* </HomeLayout> */}
    </>
  );
};
export default Home;
