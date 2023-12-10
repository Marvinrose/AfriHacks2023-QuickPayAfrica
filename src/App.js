import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Account from "./pages/account/index";
import Home from "./pages/home/index";
import "./App.css";
import SignIn from "./pages/account/components/signIn";
import MiniDrawer from "./pages/layout";

// import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createAccount" element={<Account />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/layout" element={<MiniDrawer />} />
      </Routes>
    </Router>
  );
}

export default App;
