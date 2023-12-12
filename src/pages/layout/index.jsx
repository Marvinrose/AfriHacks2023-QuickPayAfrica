// Layout.js

import React from "react";
import ResponsiveAppBar from "./components/navbar";
// import Home from "../home/index";
// import { Home } from "@mui/icons-material";
// import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <div>
      <ResponsiveAppBar />

      <main>{children}</main>
    </div>
  );
};

export default Layout;
