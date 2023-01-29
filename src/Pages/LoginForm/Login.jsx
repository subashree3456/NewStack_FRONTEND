import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./login.css";
import { login } from "../../Redux/apiCalls";
const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const data = {
    username: name,
    password,
  };
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
  const handleSubmit = () => {
    login(dispatch, data);
    navigate("/");
  };
  return (
    <div className="bodyl">
      <div className="boxsl">
        <div className="forml">
          <h2>Sign In</h2>
          <div className="inputBoxl">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required="required"
            />
            <span className="span">Username</span>
            <i></i>
          </div>
          <div className="inputBoxl">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required="required"
            />
            <span className="spanl">Password</span>
            <i></i>
          </div>
          <div className="linksl">
            <span>Forget Password</span>
            <Link className="link-doml" to={"/register"}>
              <span>SignUp</span>
            </Link>
          </div>
          <button onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
