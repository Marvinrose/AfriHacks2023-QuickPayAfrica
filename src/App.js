import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Account from "./pages/account/index";
import Home from "./pages/home/index";
import "./App.css";
import SignIn from "./pages/account/components/signIn";
import MiniDrawer from "./pages/layout";
// import Products from "./pages/products";
import Test from "./pages/products/test";
// import Fade from "./pages/products/components/description";
import Type from "./pages/account/components/type";

// import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createAccount" element={<Account />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/layout" element={<MiniDrawer />} />
        {/* <Route path="/products" element={<Products />} /> */}
        <Route path="/products" element={<Test />} />
        {/* <Route path="/ProductDescription" element={<Fade />} /> */}
        <Route path="/userType" element={<Type />} />
      </Routes>
    </Router>
  );
}

export default App;
