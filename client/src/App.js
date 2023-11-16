import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AccountManager from "./pages/AccoutManager";
import AccountPacher from "./pages/AccountPacher";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/sign_up" element={<Signup />} />
          <Route path="/manager" element={<AccountManager/>} />
          <Route path="/packer" element={<AccountPacher/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
