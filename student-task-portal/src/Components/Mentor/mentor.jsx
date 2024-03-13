import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { studentContext } from "../../Context/getStudentContext";
import { mentorContext } from "../../Context/getMentorContext";

export default function Mentor()
{
    const navigate = useNavigate();
    const {studentDetails = []} = useContext(studentContext);
    const {mentorDetails = []} = useContext(mentorContext);
    const [formData, setFormData] = useState();
    function handleInputChange(e)
    {
        //e.preventDefault();
        console.log(e.target.value, e.target.id)
        let id = 0;
        studentDetails.map((stuVal, index) => {
            if(e.target.value == stuVal.studentFullName)
            {
                id = stuVal._id;
                console.log(id, stuVal.studentFullName)
            }      
        })
        if (e) {
            const formCopy = {
              ...formData,
              stu: id
            };
            formCopy[e.target.id] = e.target.value;
            setFormData(formCopy);
          }      
    }

    var msg = "";
    function createAccount(e)
    {
        e.preventDefault();
        let mentor = "Boun", menId;
        console.log("mentor",mentorDetails)
        mentorDetails.map((menVal, index) => {
            if(mentor === menVal.mentor_username)
            {
                menId = menVal._id;            }
        })
        console.log(menId)
        fetch(`http://localhost:5000/api/mentor/assign_student/${menId}`,{
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "PATCH",
            body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((error) => console.log(error))
        // if(msg !== "")
        // {
        //     alert("Account Created Successfully");
        //     navigate("/");
        // }
    }
    return (
        <>
           <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" tabindex="-1" id="navbarToggler" aria-labelledby="offcanvasDarkNavbarLabel"> 
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <Link to="/dashboard">
                            <a class="nav-link" aria-current="page" href="#">
                                <i class="bi bi-speedometer2"></i>
                                    &nbsp;&nbsp;Dashboard
                            </a>
                        </Link>
                        </li>   
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <i class="bi bi-person-video"></i>
                                    &nbsp;&nbsp;Class
                            </a>
                        </li>   
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <i class="bi bi-list-task"></i>
                                    &nbsp;&nbsp;Tasks
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <i class="bi bi-patch-question-fill"></i>
                                    &nbsp;&nbsp;Queries
                            </a>
                        </li>
                    </ul>
                    <span class="navbar-brand" href="#">Student Portal</span>
                </div>
            </div>
        </nav>
        <div className="container-fluid" style={{backgroundColor: "#a3a3c2"}}>
            <div className="row-lg-12 d-flex" 
                style={{height: "100vh"}}>
               
                <div className="container" style={{backgroundColor: "#a3a3c2", padding: "0px"}}>
                <div className="col-lg-5" style={{padding: "0px"}}>
                <div className="card mt-5" style={{width: "33rem", borderColor: "white", height: "33rem", borderRadius: "15px"}}>
            
                    <h4 className="mt-3 text-center">Registration</h4>
            
                    <div className="card-body">
                        <div className="row-lg-12 d-flex">
                            <div className="col-lg-4">
                                <label htmlFor="name" className="form-label">Fullname</label>
                            </div>
                            <input type="text" className="form-control" id="name" 
                            placeholder="Enter Fullname" onChange={handleInputChange}/>
                        </div>

                        <div className="mt-3 text-center">
                            <button type="button" className="btn btn-primary" onClick={createAccount}>Login</button>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}