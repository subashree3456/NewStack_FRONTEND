import React from "react";
import Center from "../../Component/Center";
import LeftSide from "../../Component/LeftSide";
import NavBar from "../../Component/NavBar";

import "./index.css";
import RightSide from "../../Component/RightSide";
const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <div className="Container">
        <RightSide />
        <Center />
        <LeftSide className="left" />
      </div>
    </div>
  );
};

export default Home;
