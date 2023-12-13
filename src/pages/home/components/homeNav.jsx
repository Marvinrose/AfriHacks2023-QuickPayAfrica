import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// import LOGO from "./images/Afrilogo.png";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        className="p-3"
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
            {/* <img className="img-fluid " src={LOGO} alt="" width={30} />{" "} */}
            <span style={{ fontFamily: "Montserrat" }}>QuickPayAfrica</span>
          </Typography>
          <Button style={{ fontFamily: " var(--font-famiy)" }} color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
