import React from "react";
import { Outlet } from "react-router-dom";

import "./index.css";
const Center = () => {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
};

export default Center;
