import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const SignIn = () => {
  return (
    <>
      <div>
        <h1
          className=""
          style={{ fontSize: "40px", marginTop: "50px", marginLeft: "20px" }}
        >
          QuickPayAfrica.
        </h1>
      </div>
      <div className="container col-lg-6" style={{ marginTop: "80px" }}>
        <div className="text-center ">
          <h1 className=" mb-3">Sign In</h1>
          <p className="">Hi, welcome back, you have been missed </p>

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

          <div className="mb-3">
            {/* Use Button component from Material-UI */}
            <Button
              variant="contained"
              fullWidth
              style={{ backgroundColor: "#703a32" }}
            >
              Sign In
            </Button>
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
