import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { publicRequest } from "../../requestMethods";

const Editquestion = ({ props }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser);
  const question = useSelector((state) => state.question.currentQuestion);

  const [header, setHeader] = useState("");
  const [tag, setTags] = useState("");
  const [body, setBody] = useState("");
  let tags = tag?.split(",");
  let data = {
    questionid: question._id,
    header,
    tags,
    body,
    jwttokenloginuser: user.jwttokenloginuser,
  };
  let tagss = question.tags.toString();
  useEffect(() => {
    setHeader(question.header);
    setBody(question.body);
    setTags(tagss);
  }, [question]);
  async function handleEditQuestion() {
    try {
      const res = await publicRequest.post(`/questionedit`, data);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="AskQuestionContainer">
        <h1>Ask Question</h1>
        <div className="AskQuestionHeader">
          <h4>Writing a good question</h4>
          <p>
            You're ready to ask a programming-related question and this form
            will help guide you through the process. Looking to ask a
            non-programming question? See the topics here to find a relevant
            site.
          </p>
          <h5>steps</h5>
          <ul>
            <li>Summarize your problem in a one-line title.</li>
            <li>Describe your problem in more detail.</li>
            <li>Describe what you tried and what you expected to happen.</li>
            <li>
              Add “tags” which help surface your question to members of the
              community.
            </li>
            <li>Review your question and post it to the site.</li>
          </ul>
        </div>
        <div className="questionBody">
          <div className="questionTitle">
            <h5>Title</h5>
            <span>Write An Question Title</span>
            <input
              type="text"
              value={header}
              placeholder="title"
              onChange={(e) => setHeader(e.target.value)}
            />
          </div>
          <div className="tags">
            <h5>Tags</h5>
            <span>Write Tags sperate with (",")</span>
            <input
              type="text"
              value={tag}
              placeholder="html,css,react"
              onChange={(e) => setTags(e.target.value)}
            />
          </div>
          <div className="questionDesc">
            <h5>Description</h5>
            <span>Write an discription about question</span>
            <input
              type="text"
              value={body}
              placeholder="description"
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <button onClick={handleEditQuestion} className="AskQuestionbtn">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Editquestion;
