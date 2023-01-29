import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { publicRequest } from "../../requestMethods";

import NavBar from "../NavBar";

import "./EditAnswer.css";
const EditAnswer = () => {
  const navigate = useNavigate();
  const [editanswer, seteditanswer] = useState("");
  const answer = useSelector((state) => state.answer.currentAnswer);
  const user = useSelector((state) => state.user.currentUser);
  useEffect(() => {
    seteditanswer(answer.answer_body);
  }, [answer]);
  const data2 = {
    body: editanswer,
    answerid: answer._id,
    jwttokenloginuser: user.jwttokenloginuser,
  };
  async function Editanswers() {
    try {
      const res = await publicRequest.post("/answeredit", data2);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <NavBar />

      <div className="Answer">
        <h2>Your Answer</h2>

        <textarea
          value={editanswer}
          onChange={(e) => seteditanswer(e.target.value)}
          type="text"
          rows={10}
        />

        <button onClick={() => Editanswers()}>Resubmit Answer</button>
      </div>
    </>
  );
};

export default EditAnswer;
