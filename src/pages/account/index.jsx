import * as React from "react";
// import TextField from "@mui/material/TextField";
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
        <div class="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Name</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Confirm Password</label>
        </div>
        <div className="mb-3">
          <button type="button" class="btn btn-primary form-control round">
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
