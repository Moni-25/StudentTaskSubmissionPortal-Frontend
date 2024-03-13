import { useContext, useEffect, useState } from "react"
import "./student.css"
import { Link, Navigate, useNavigate } from "react-router-dom"
import ClassDetails from "../../Pages/Class/class";
import StudentPortal from "./studentPortal";
import { studentContext } from "../../Context/getStudentContext";

export default function Student()
{
    const {studentDetails = []} = useContext(studentContext);
    //console.log("SD", studentDetails)
    const navigate = useNavigate();

    // Login Submission
    var login_status = "false";
    function handleButton(e)
    {
        e.preventDefault();
        const user = document.getElementById("student_username").value;
        let users = "";
        console.log(user, studentDetails);
        studentDetails.map((da, index) => {
            if(user === da.studentFullName){
                login_status = "true";
                users = da.studentFullName
            }
        }
        )
        const data = {users}
        console.log(login_status)
        if(login_status === "true"){
            console.log(`${users} Login Successfully!!!`);
            alert("Login Successfully!!!");
            navigate("/student_portal", {state: data});
        }
        else{
            console.log("Username or Password Incorrect");
        }
        //console.log(studentLogin)
    }
    return (
        <>
            <div className="bgImage"></div>
            <div className="row">
            <div className="card border-primary  col-lg-12">
        
                <h5 className="mt-3 text-center">Student Login</h5>
        
                <div className="card-body">
                    <div className="">
                        <label htmlFor="username" className="form-label">Username</label><br></br>
                    </div>

                    <div className="mb-3" style={{display: "flex"}}>
                        <i className="bi bi-person-fill form-control"></i>
                        <input type="text" className="form-control" id="student_username" placeholder="Username"/>
                        {document.getElementById(student_username).value === "" ? <p>username is empty</p> : ""}
                    </div>

                    <div className="mb-1">
                        <label htmlFor="password" className="form-label">Password</label><br></br>
                    </div>

                    <div className="mb-3" style={{display: "flex"}}>
                        <i className="bi bi-key-fill form-control"></i>
                        <input type="password" className="form-control" id="student_password" placeholder="Password" required/>
                    </div>

                    <div className="mt-1 mb-2 text-end">
                        <a href="">Forgot Password?</a>
                    </div>

                    <div className="mt-3 text-center">
                        <button type="button" className="btn btn-primary" onClick={handleButton}>Login</button>
                    </div>

                    <div className="mt-3 text-center">
                        <Link to="/sign_up">
                            <a>New User? Sign Up Here.....</a>
                        </Link>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}