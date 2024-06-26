import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import LOGO from "./images/Afrilogo.png";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        className="p-2"
        style={{ backgroundColor: "var(--bg-color)" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img className="img-fluid " src={LOGO} alt="" width={30} />{" "}
            <Link
              to="/"
              style={{ color: "var(--white)", textDecoration: "none" }}
            >
              <span style={{ fontFamily: "Montserrat" }}>QuickPayAfrica</span>
            </Link>
          </Typography>
          <Button style={{ fontFamily: " var(--font-famiy)" }} color="inherit">
            <Link
              to="/signIn"
              style={{ textDecoration: "none", color: "var(--white)" }}
            >
              {" "}
              Login
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
