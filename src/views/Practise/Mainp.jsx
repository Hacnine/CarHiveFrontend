import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Homep from "./Homep";
import Aboutp from "./Aboutp";

const Mainp = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Homep />} />

        <Route path="/homep" element={<Homep />} />
        <Route path="/aboutp" element={<Aboutp />} />
      </Routes>
  );
};

export default Mainp;
