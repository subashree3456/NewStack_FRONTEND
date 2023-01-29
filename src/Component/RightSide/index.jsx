import React from "react";
import "./index.css";
import PublicIcon from "@mui/icons-material/Public";
import { useNavigate } from "react-router-dom";
const RightSide = () => {
  const navigate = useNavigate();
  function handleHome() {
    navigate("/");
  }
  function handleTags() {
    navigate("/Tags");
  }
  function handleUser() {
    navigate("/user");
  }
  return (
    <div className="containerRight">
      <p className="rightleft">Home</p>

      <p className="rightleft">Public</p>

      <div className="QuestionButton">
        <PublicIcon style={{ marginRight: "0px", position: "absolute" }} />
        <p style={{ marginLeft: "24px" }} onClick={handleHome}>
          Question
        </p>
      </div>
      <p className="rightwight" onClick={handleTags}>
        Tags
      </p>
      <p className="rightwight" onClick={() => handleUser()}>
        Users
      </p>
      <p className="rightwight">Companies</p>
    </div>
  );
};

export default RightSide;
