import * as React from "react";
import { TextField } from "@mui/material";

// import { Button } from "@mui/material";

const Account = () => {
  return (
    <>
      <div
        className="container text-center col-lg-6"
        style={{ marginTop: "100px" }}
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
          <button
            type="button"
            class="btn btn-primary btn-rounded form-control "
          >
            Sign Up
          </button>
        </div>
        <div>
          <p>Already have an account? Sign in</p>
        </div>
      </div>
    </>
  );
};

export default Account;
