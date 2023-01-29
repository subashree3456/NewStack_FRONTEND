import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { publicRequest } from "../../requestMethods";
import ReplayIcon from "@mui/icons-material/Replay";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./questionDetail.css";
import { Avatar } from "@mui/material";
import { questionSuccess } from "../../Redux/questionSlice";
import { answerSuccess } from "../../Redux/answerSlice";

const QuestionDetail = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const param = useParams();
  const [questionDetails, setquestionDetails] = useState([]);
  const [answer, setanswer] = useState("");

  const params = param.id;
  useEffect(() => {
    async function getdetail() {
      try {
        const res = await publicRequest.get(`/question?id=${params}`);

        setquestionDetails(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getdetail();
  }, []);
  const data = {
    questionid: params,
    body: answer,
    jwttokenloginuser: user.jwttokenloginuser,
  };
  async function handleAnswerSubmit() {
    if (answer !== "") {
      try {
        const res = await publicRequest.post(`/answerpost`, data);
        setanswer("");
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  }

  function handleQuestionEdit() {
    dispatch(questionSuccess(questionDetails));
    navigate("edit");
  }
  const data1 = {
    questionid: params,
    jwttokenloginuser: user.jwttokenloginuser,
  };
  async function handleDelete(e) {
    try {
      const res = await publicRequest.post("/questiondelete", data1);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  async function editAnswer(e) {
    await dispatch(answerSuccess(e));
    navigate("/answeredit");
  }

  async function handleVote(e) {
    try {
      const res = await publicRequest.post("/questionvote", {
        questionid: params,
        vote: e,
        jwttokenloginuser: user.jwttokenloginuser,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  async function handleVoteanswer(e, i) {
    try {
      const res = await publicRequest.post("/answervote", {
        answerid: e,
        vote: i,
        jwttokenloginuser: user.jwttokenloginuser,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="questionDetailContainer">
      <div className="questiondetailheader">
        <div className="detailTitle">
          <h1>{questionDetails.header}</h1>
        </div>
        <div className="detailposttime">
          <p>{questionDetails.posted_on}</p>
        </div>
      </div>
      <div className="questionbody">
        <div className="detailbody">
          <div className="leftsidedetail">
            <KeyboardArrowUpIcon
              className="uparrow"
              onClick={() => handleVote(1)}
            />
            {questionDetails.liked_by?.length}
            <KeyboardArrowDownIcon
              onClick={() => handleVote(-1)}
              className="downarrow"
            />
            <BookmarkBorderIcon />
            <ReplayIcon />
          </div>
          <div className="rightcover">
            <div className="rightsidedetail">{questionDetails.body}</div>
            {questionDetails.posted_by === user.userId ? (
              <div className="editOption">
                <ul className="option">
                  <li onClick={() => handleQuestionEdit(questionDetails._id)}>
                    Edit
                  </li>
                  <li onClick={() => handleDelete(questionDetails._id)}>
                    delete
                  </li>
                  <li>share</li>
                </ul>
                <div className="usercover">
                  <Avatar /> <p>{questionDetails.asked_by}</p>
                </div>
              </div>
            ) : (
              <>
                <div className="editOption">
                  <p>Qusetion By</p>
                  <div className="usercover">
                    <Avatar /> <p>{questionDetails.asked_by}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {questionDetails.answers?.length >= 0 ? (
        questionDetails.answers?.map((items) => {
          return (
            <div key={items} className="detailbody">
              <div className="leftsidedetail">
                <KeyboardArrowUpIcon
                  className="uparrow"
                  onClick={() => handleVoteanswer(items._id, 1)}
                />
                {items?.liked_by.length}
                <KeyboardArrowDownIcon className="downarrow" />
                <BookmarkBorderIcon />
                <ReplayIcon />
              </div>
              <div className="rightcover">
                <div className="rightsidedetail">{items.answer_body}</div>
                {items.answered_by === user.userId ? (
                  <div className="editOption">
                    <ul className="option">
                      <li onClick={() => editAnswer(items)}>Edit</li>
                      <li>delete</li>
                      <li>share</li>
                    </ul>
                    <div className="usercover">
                      <Avatar /> <p>{items.answered}</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="editOption">
                      <p>Answered By</p>
                      <div className="usercover">
                        <Avatar /> <p>{items.answered}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })
      ) : (
        <></>
      )}
      <div className="Answer">
        <h2>Your Answer</h2>

        <textarea
          value={answer}
          onChange={(e) => setanswer(e.target.value)}
          type="text"
          rows={10}
        />

        <button onClick={handleAnswerSubmit} className="answerSubmit">
          Post Answer
        </button>
      </div>
    </div>
  );
};

export default QuestionDetail;
