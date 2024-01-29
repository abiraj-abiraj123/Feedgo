import { Link, useNavigate } from "react-router-dom";
import "./AdminFeedback.css";
import "./Textarea";
import "./Button";
import { useState,useContext } from "react";
import { Button } from "react-bootstrap";
import Textarea from "./Textarea";
import {data} from './questions';
const AdminFeedback = () => {
  const [question,questionchange]=useState("");
  const navigate=useNavigate();
  const handlesubmit= (e) => {  

    e.preventDefault();
    const fb = { question };


    fetch("http://localhost:8000/user", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(fb),
    })
      .then((res) => {
        alert("saved successfully");
        navigate('/Afeedback');
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2> Feedback Form </h2>
              </div>
              <div className="card-body">
                <div className="row">

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Enter your question</label>
                      <input required
                        value={question}
                        onChange={(e) => questionchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                 
                  <div className="col-lg-12">
                    <div className="from-group">
                      <button
                        className="buttons1 btn btn-success"
                        type="Submit"
                        onClick={()=>{data.push({"question":question});console.log("saved");navigate('/Afeedback')}}
                        >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminFeedback;
