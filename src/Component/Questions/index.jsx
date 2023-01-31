import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { publicRequest } from "../../requestMethods";
import "./index.css";

const Questions = () => {
  const navigate = useNavigate();
  const [question, setQuestion] = useState([]);
  useEffect(() => {
    async function getQuestion() {
      try {
        const res = await publicRequest.get("/publicquestionsget");

        setQuestion(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getQuestion();
  }, []);

  function handleQuestionDetails(e) {
    navigate(`questionDetail/${e}`);
  }
  return (
    <div className="QuestionContainer">
      {question.length <= 0 ? (
        <h4 style={{ textAlign: "center", marginTop: "80px" }}>Loading....</h4>
      ) : (
        <>
          {question?.map((item) => {
            return (
              <div className="containerQuestion" key={item.id}>
                <div className="viewVote">
                  <div className="vote">{item.like.length} votes</div>
                  <div className="answerCount">{item.answer_count}:answer</div>
                  <div className="viewCount">{item.views} view</div>
                </div>
                <div className="QuestCon">
                  <div
                    className="questionHeader"
                    onClick={() => handleQuestionDetails(item.id)}
                  >
                    {item.header}
                  </div>
                  <div className="questionTag">
                    {item.tags?.map((items) => {
                      return <span key={items}>{items}</span>;
                    })}
                  </div>

                  <div className="userDetail">
                    <div className="Auth">{item.author}</div>
                    <div className="createdTime">{item.posted_on}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Questions;
