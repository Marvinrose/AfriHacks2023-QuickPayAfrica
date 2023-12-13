import * as React from "react";

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

export default function BasicCard() {
  return (
    <Card
      sx={{ maxWidth: 600 }}
      style={{
        background: "#F0DAD3",
        color: "#172845",
        maxWidth: "500px",
        padding: "15px",
        borderRadius: "4PX",
        borderBottomRightRadius: "20px",
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }}>
          Every product you find here is authentic and crafted with care by our
          carefully vetted artisans and sellers. We have no room for copyright.
        </Typography>
        <div className="row mt-3">
          <div className="col-4">
            <h1 className="mb-0" style={{ fontSize: "28px" }}>
              1,000+
            </h1>
            <p
              className="mt-0"
              style={{ fontSize: "16px", paddingLeft: "4px" }}
            >
              Users
            </p>
          </div>
          <div className="col-4">
            <h1 className="mb-0" style={{ fontSize: "28px" }}>
              100+
            </h1>
            <p
              className="mt-0"
              style={{ fontSize: "16px", paddingLeft: "4px" }}
            >
              Reviews
            </p>
          </div>
          <div className="col-4">
            <h1 className="mb-0" style={{ fontSize: "28px" }}>
              20+
            </h1>
            <p
              className="mt-0"
              style={{ fontSize: "16px", paddingLeft: "4px" }}
            >
              Hangouts
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
