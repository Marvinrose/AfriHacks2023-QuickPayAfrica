// Layout.js

import React from "react";
import ButtonAppBar from "./homeNav";
// import Home from "../home/index";
// import { Home } from "@mui/icons-material";
// import { Box } from "@mui/material";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <ButtonAppBar />

      <main>{children}</main>
    </div>
  );
};

export default HomeLayout;
