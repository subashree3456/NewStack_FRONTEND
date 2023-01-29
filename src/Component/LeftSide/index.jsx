import React from "react";
import "./index.css";
const LeftSide = () => {
  return (
    <div className="containerLeft">
      <div className="list-group">
        <div
          className="fistleft"
          style={{
            backgroundColor: " #FBF3D5",
            padding: "0px 30px",
            textAlign: "left",
            fontSize: "20px",
          }}
        >
          <small>The Overflow Blog</small>
        </div>
        <div className="para">
          <p>
            <i style={{ marginLeft: "15px" }} className="fas fa-pencil-alt"></i>
            <small style={{ marginLeft: "16px" }}>
              Donec id elit non mi porta.
            </small>
          </p>

          <p>
            <i style={{ marginLeft: "15px" }} className="fas fa-pencil-alt"></i>
            <small style={{ marginLeft: "16px" }}>
              Donec id elit non mi porta.
            </small>
          </p>
        </div>

        <div
          style={{
            marginTop: "15px",
            backgroundColor: "#FBF3D5",
            padding: "0px 30px",
            textAlign: "left",
            fontSize: "20px",
          }}
        >
          <small>The Featured Questions</small>
        </div>

        <div>
          <p>
            <i
              style={{ marginLeft: "15px" }}
              className="fab fa-stack-overflow"
            ></i>
            <small style={{ marginLeft: "16px" }}>Whats your name ?</small>
          </p>

          <p style={{ marginBottom: "10px" }}>
            <i
              style={{ marginLeft: "15px" }}
              className="fab fa-stack-overflow"
            ></i>
            <small style={{ marginLeft: "16px" }}>
              where you are studying ?
            </small>
          </p>

          <p style={{ marginBottom: "10px" }}>
            <i
              style={{ marginLeft: "15px" }}
              className="fas fa-comment-alt"
            ></i>
            <small style={{ marginLeft: "16px" }}>Where are you from ?</small>
          </p>

          <p style={{ marginBottom: "10px" }}>
            <i
              style={{ marginLeft: "15px" }}
              className="fas fa-comment-alt"
            ></i>
            <small style={{ marginLeft: "16px" }}>
              the statue of liberty situated ?
            </small>
          </p>
        </div>
        <div
          style={{
            marginTop: "15px",
            backgroundColor: "#FBF3D5",
            padding: "0px 30px",
            textAlign: "left",
            fontSize: "20px",
          }}
        >
          <small>Hot on Meta</small>
        </div>
        <div className="backcontentofheaderside list-group-item flex-column align-items-start">
          <p style={{ marginBottom: "10px" }}>
            <i style={{ marginLeft: "15px" }} className="fas fa-pencil-alt"></i>
            <small style={{ marginLeft: "16px" }}>
              Changing initializer-list tag wiki
            </small>
          </p>

          <p style={{ marginBottom: "10px" }}>
            <i style={{ marginLeft: "15px" }} className="fas fa-pencil-alt"></i>
            <small style={{ marginLeft: "16px" }}>
              Changing initializer-list tag wiki
            </small>
          </p>
        </div>
      </div>

      <div className="list-group secondsidefeature">
        <div
          style={{
            marginTop: "15px",
            backgroundColor: "#FBF3D5",
            padding: "0px 30px",
            textAlign: "left",
            fontSize: "20px",
          }}
        >
          <small>Custom Filter</small>
        </div>

        <div>
          <p style={{ marginBottom: "10px" }}>
            <i style={{ marginLeft: "15px" }} className="fas fa-filter"></i>
            <small style={{ marginLeft: "16px" }} className="text-muted">
              Create your custom filter.
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
