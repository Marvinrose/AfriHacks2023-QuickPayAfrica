import * as React from "react";
// import TextField from "@mui/material/TextField";
// import { Button } from "@mui/material";

const SignIn = () => {
  return (
    <>
      <div className="container col-lg-6" style={{ marginTop: "150px" }}>
        <div className="text-center ">
          <h1 className=" mb-3">Sign In</h1>
          <p className="">Hi, welcome back, you have been missed </p>

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

          <div className="mb-3">
            <button type="button" class="btn btn-primary form-control round">
              Sign In
            </button>
          </div>
        </div>

        <div>
          <p>Forgot password?</p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
