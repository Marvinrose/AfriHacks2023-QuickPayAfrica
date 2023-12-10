// Layout.js

import React from "react";
import MiniDrawer from "./components/sidebar";
// import Home from "../home/index";
// import { Home } from "@mui/icons-material";
// import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <div>
      <MiniDrawer />

      <main>{children}</main>
    </div>
  );
};

export default Layout;
