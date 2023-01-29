import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Questions from "../Questions";
import "./index.css";

const HomePage = () => {
  const user = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  function AskQuestion() {
    navigate("/Askquestion");
  }
  return (
    <div className="ContainerHomePage">
      <div className="HeaderHomePage">
        <span className="headerTitle">Top Question</span>
        {user !== null ? (
          <button className="headerButton" onClick={AskQuestion}>
            Ask Question
          </button>
        ) : (
          <button className="headerButton">Login & Ask Question</button>
        )}
      </div>
      <div className="headerBox">
        <div className="headerBoxEnd">
          <span className="headerspan">Interesting</span>
          <span className="headerspan">
            <span className="spancount">264</span> Bountied
          </span>
          <span className="headerspan">Hot</span>
          <span className="headerspan">Week</span>
          <span className="headerspan">Month</span>
        </div>
      </div>
      <Questions />
    </div>
  );
};

export default HomePage;
