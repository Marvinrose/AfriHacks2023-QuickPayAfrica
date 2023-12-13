import * as React from "react";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import ButtonAppBar from "../home/components/homeNav";
import Footer from "../home/components/footer";

// import { Button } from "@mui/material";

const Account = () => {
  return (
    <>
      <ButtonAppBar />
      <div
        className="container text-center col-lg-6"
        style={{ marginTop: "150px" }}
      >
        <h1 className=" mb-3">Create Account</h1>
        <p className="fo">Fill your information below </p>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          fullWidth
          className="mb-3"
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          fullWidth
          className="mb-3"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          fullWidth
          className="mb-3"
        />
        <TextField
          id="outlined-password-input"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          fullWidth
          className="mb-3"
        />

        <div className="mb-3">
          {/* Use Button component from Material-UI */}
          <Button
            variant="contained"
            fullWidth
            style={{ backgroundColor: "#703a32" }}
          >
            Sign Up
          </Button>
        </div>
        <div>
          <p>
            Already have an account? <Link to="/userType">Sign in</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Account;
