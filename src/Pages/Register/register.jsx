import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { publicRequest } from "../../requestMethods";

import "./register.css";
const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [conformPass, setConformPass] = useState("");
  const data = {
    name,
    username: name,
    email,
    password,
  };
  const handleSubmit = () => {
    if (password === conformPass) {
      async function registeruser() {
        try {
          const res = await publicRequest.post("/signup", data);

          navigate("/login");
        } catch (error) {
          console.log(error);
        }
      }
      registeruser();
    }
  };
  return (
    <div className="body">
      <div className="box">
        <div className="form">
          <h2>Sign Up</h2>
          <div className="inputBox">
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              required="required"
            />
            <span className="span">Username</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              type="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required="required"
            />
            <span className="span">Email</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              type="password"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required="required"
            />
            <span className="span">Password</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              type="password"
              value={conformPass}
              name="password"
              onChange={(e) => setConformPass(e.target.value)}
              required="required"
            />
            <span className="span">ConForm Password</span>
            <i></i>
          </div>
          <div className="links">
            <span>Already Have Account</span>
            <Link className="link-dom" to={"/"}>
              <span>Login</span>
            </Link>
          </div>
          <button onClick={handleSubmit}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
