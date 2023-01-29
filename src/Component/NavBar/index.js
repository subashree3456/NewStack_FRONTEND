import React from "react";
import { useDispatch, useSelector } from "react-redux";
import InboxIcon from "@mui/icons-material/Inbox";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MessageIcon from "@mui/icons-material/Message";
import "./index.css";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../Redux/userRedux";
const NavBar = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  function handleLogOut() {
    dispatch(logOut());
    navigate("/");
  }
  function loginHandle() {
    navigate("/login");
  }
  function signUpHandle() {
    navigate("/register");
  }
  function handleHome() {
    navigate("/");
  }
  return (
    <div className="nav">
      <div className="first">
        <div className="logo">
          <img
            className="img"
            src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Stack_Overflow_logo.png"
            alt=""
          />
        </div>
        <div className="options">
          <p onClick={handleHome}>Home</p>
          <p>About</p>
          <p>Products</p>
        </div>
      </div>
      <div className="second">
        <SearchIcon className="search" />
        <input type="text" placeholder="search" />
        {user === null ? (
          <div className="buttons">
            <button onClick={loginHandle} className="btn login">
              login
            </button>
            <button onClick={signUpHandle} className="btn">
              signUp
            </button>
          </div>
        ) : (
          <div className="svg">
            <a href="#" title="logout">
              <AccountCircleIcon onClick={handleLogOut} />
            </a>

            <InboxIcon />
            <EmojiEventsIcon className="cup" />
            <MessageIcon />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
