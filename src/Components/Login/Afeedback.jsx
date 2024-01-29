import { useEffect, useState, } from "react";
import { Link, useNavigate } from "react-router-dom";
import {data} from './questions'
import "bootstrap/dist/css/bootstrap.min.css";
const Afeedback = () => {
        const [question, questionchange] = useState(data);
        const navigate = useNavigate();
    
        const LoadDetail = (id) => {
            navigate("/employee/display/" + id);
        }
        const LoadEdit = (id) => {
            navigate("/employee/edit/" + id);
        }
        const Removefunction = (id) => {
            if (window.confirm('Do you want to remove?')) {
                fetch("http://localhost:8000/user/" + id, {
                    method: "DELETE"
                }).then((res) => {
                    alert('Removed successfully.')
                    window.location.reload();
                }).catch((err) => {
                    console.log(err.message)
                })
            }
        }
    
     useEffect(() => {
            fetch("http://localhost:8000/user").then((res) => {
                return res.json();
            }).then((resp) => {
                questionchange(resp);
            }).catch((err) => {
                console.log(err.message);
            })
        }, [])
        return (
            <div className="container" onLoad={()=>questionchange(data)}>
                <div className="card">
                    <div className="card-title">
                        <h2>Feedback Editing</h2>
                    </div>
                    <div className="card-body">
                        <div className="divbtn">
                                <Link to="/AdminFeedback" className=" button1 btn btn-success">Add New (+)</Link>
                        </div>
                        <table className="table table-bordered">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <td>Feedback Form</td>
                                </tr>
                            </thead>
                            <tbody>
    
                                {question &&
                                    question.map(item => (
                                        <tr key={item.question}>
                                            <td>{item.question}</td>
                                            <td><a onClick={() => { LoadEdit(item.id) }} className=" button1  btn btn-success">Edit</a>
                                                <a onClick={() => { Removefunction(item.id) }} className=" button1  btn btn-danger">Remove</a>
                                                <a onClick={() => { LoadDetail(item.id) }} className="button1 btn btn-primary">Details</a>
                                            </td>
                                        </tr>
                                    ))
                                }
    
                            </tbody>
                            {console.log(question)}
                        </table>
                    </div>
                </div>
            </div>
        );
    }    
    

export default Afeedback;
