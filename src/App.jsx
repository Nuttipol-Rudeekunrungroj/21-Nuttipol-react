import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarHomeOwner from "./components/NavBarHomeOwner";
import Home from "./pages/Home";
import Owner from "./pages/Owner";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBarHomeOwner />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/owner" element={<Owner />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
