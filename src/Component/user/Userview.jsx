import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { publicRequest } from "../../requestMethods";
import NavBar from "../NavBar";

const Userview = () => {
  const [users, setUser] = useState([]);
  const [userQuestion, setUserquestion] = useState([]);
  const user = useSelector((state) => state.user.currentUser);

  const data = {
    userId: user.userId,
    jwttokenloginuser: user.jwttokenloginuser,
  };
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await publicRequest.post("/getuserquestion", data);

        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);
  console.log(users);
  return (
    <div>
      <NavBar />
      <h1 style={{ textAlign: "center" }}>
        hai u have posted {users?.length} question
      </h1>
    </div>
  );
};

export default Userview;
