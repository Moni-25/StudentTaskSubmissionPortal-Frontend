import {Link, useLocation, useNavigate} from "react-router-dom";
import "./mentor.css"
import { useContext, useState } from "react";
import { studentContext } from "../../Context/getStudentContext";
import { mentorContext } from "../../Context/getMentorContext";

export default function Mentor()
{
    const location = useLocation();
    const { fromHome } = location.state;
    let data = fromHome.data;
    console.log(data)
    const { mentorDetails = [] } = useContext(mentorContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        mentor_name: "",
        username: "",
        password: "",
        email: "",
        phoneNo: "",
        course: "",
        address: ""
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    function handleInputChange(e)
    {
        //e.preventDefault();
        console.log(e.target.value, e.target.id)
        const { name, value } = e.target;
    
        if (e) {
            const formCopy = {
              ...formData,
              [name]: value
            };
            formCopy[e.target.id] = e.target.value;
            setFormData(formCopy);
          }      
    }
    
    const validateForm = () => 
    {
        let isValid = true;
        const newErrors = {};
    
        // Validate Form Fields
        if (!formData.mentor_name) {
          newErrors.mentor_name = "Mentorname is required";
          isValid = false;
        }
        let user = document.getElementById("mentor_username").value;
    console.log(user)
        {mentorDetails.map(s => (formData.username === s.mentor_username ?  
            formData.username = "already": ""))}
        if (!formData.username) {
            newErrors.username = "Username is required";
            isValid = false;
        }
        if (formData.username === "already") {
            newErrors.username = "Username already exit";
            isValid = false;
        }
        
        if (!formData.password) {
            newErrors.password = "Password is required";
            isValid = false;
          }
          {mentorDetails.map(s => (formData.email === s.mentor_email ?  
            formData.email = "already": ""))}  
        if (!formData.email) {
          newErrors.email = "Email is required";
          isValid = false;
        }
        if (formData.email === "already") {
            newErrors.email = "Email already exit";
            isValid = false;
        }

        {mentorDetails.map(s => (formData.phoneNo === s.mentor_phoneNo ?  
            formData.phoneNo = "already": ""))}  
        if (!formData.phoneNo) {
            newErrors.phoneNo = "Phone Number is required";
            isValid = false;
          }
          if (formData.phoneNo === "already") {
              newErrors.phoneNo = "Phone Number Already Exit";
              isValid = false;
          }
          
        if (!formData.course) {
          newErrors.course = "Course Name is required";
          isValid = false;
        }

        if (!formData.address) {
            newErrors.address = "Address is required";
            isValid = false;
          }
    
        setErrors(newErrors);
        return isValid;
    };

    function createAccount(e)
    {
        e.preventDefault();
        if (validateForm()) {
            // Form is valid, you can submit or process the data here
            console.log("Form data:", formData);
            setSubmitted(true); // Set a submitted flag
          }
          if(formData.username !== "already" && formData.email !== "already" && formData.phoneNo !== "already"){
        fetch("http://localhost:5000/api/mentor/createMentor",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((response) => {if(response.message === "Mentor Account Created Successfully!!!")
        {
            alert("Mentor Account Created Successfully!!!");
            navigate("/assign_mentor", {state:{ fromHome: { data }}})
            window.location.reload();
        }})
        .catch((error) => console.log(error));}
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" 
                        aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation"
                            style={{color: "black", border: "2px solid black"}}>
                            <i className="bi bi-distribute-vertical"></i>
                    </button>
                <div className="collapse navbar-collapse" tabindex="-1" id="navbarToggler" aria-labelledby="offcanvasDarkNavbarLabel"> 
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/mentor_list" state={{ fromHome: { data }}} style={{textDecoration: "none"}}>
                                <a className="nav-link" href="#">
                                <i className="bi bi-speedometer2"></i>
                                        &nbsp;&nbsp;Mentor List
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/assign_mentor" state={{ fromHome: { data }}} style={{textDecoration: "none"}}>
                                <a className="nav-link" href="#">
                                <i className="bi bi-speedometer2"></i>
                                        &nbsp;&nbsp;Assign Mentor
                                </a>
                            </Link>
                        </li>   
                        <li className="nav-item">
                        <Link to="/mentor" state={{ fromHome: { data }}} style={{textDecoration: "none"}}>
                            <a className="nav-link active" aria-current="page" href="#">
                            <i className="bi bi-person-video"></i>
                                    &nbsp;&nbsp;Create Mentor
                            </a>
                        </Link>
                        </li>  
                    </ul>
                    <span className="navbar-brand" href="#">{data}</span>
                </div>
                </div>
            </nav>
           <div className="container">
                <div className="col-lg-12 mt-4" style={{padding: "0px"}}>
                <div className="card" style={{
                        width: "35rem", 
                        borderColor: "#bf80ff", 
                        borderRadius: "15px",
                        position: "absolute",
                        top: "0%",
                        left: "50%",
                        transform: "translate(-50%, 0%)"
                        }}>
            
                    <h5 className="mt-3 text-center" style={{fontWeight: "700"}}>Mentor Registeration</h5>

                    <div className="card-body">
                        <div className="row-lg-12 d-flex">
                            <div className="col-lg-4">
                                <label htmlFor="mentorName" className="form-label">Fullname</label>
                            </div>
                            <input type="text" className="form-control" id="mentorName" name="mentor_name" placeholder="Enter Mentor Fullname" onChange={handleInputChange}
                                required/>
                        </div>

                        {errors.mentor_name && 
                        <div className="error mb-2 mt-2" style={{fontSize:"13px", color: "red", marginLeft:"34%"}}>
                            <i className="bi bi-exclamation-circle"></i>&nbsp;&nbsp;
                            {errors.mentor_name}
                        </div>
                        }

                        <div className="row-lg-12 mt-2 d-flex">
                            <div className="col-lg-4">
                                <label htmlFor="mentor_username" className="form-label">Username</label>
                            </div>
                            <input type="text" className="form-control" id="mentor_username" name="username" placeholder="Mentor Username" onChange={handleInputChange}/>
                        </div>

                        {errors.username && 
                        <div className="error mb-2 mt-2" style={{fontSize:"13px", color: "red", marginLeft:"34%"}}>
                            <i className="bi bi-exclamation-circle"></i>&nbsp;&nbsp;
                            {errors.username}
                        </div>
                        }

                        <div className="row-lg-12 mt-2 d-flex">
                            <div className="col-lg-4">
                                <label htmlFor="mentor_password" className="form-label">Password</label>
                            </div>
                            <input type="password" className="form-control" id="mentor_password" name="password" placeholder="Mentor Password" onChange={handleInputChange}/>
                        </div>

                        {errors.password && 
                        <div className="error mb-2 mt-2" style={{fontSize:"13px", color: "red", marginLeft:"34%"}}>
                            <i className="bi bi-exclamation-circle"></i>&nbsp;&nbsp;
                            {errors.password}
                        </div>
                        }

                        <div className="row-lg-12 mt-2 d-flex">
                            <div className="col-lg-4">
                                <label htmlFor="mentor_email" className="form-label">Email</label>
                            </div>
                            <input type="text" className="form-control" id="mentor_email" name="email" placeholder="email@gmail.com" onChange={handleInputChange}/>
                        </div>

                        {errors.email && 
                        <div className="error mb-2 mt-2" style={{fontSize:"13px", color: "red", marginLeft:"34%"}}>
                            <i className="bi bi-exclamation-circle"></i>&nbsp;&nbsp;
                            {errors.email}
                        </div>
                        }

                        <div className="row-lg-12 mt-2 d-flex">
                            <div className="col-lg-4">
                                <label htmlFor="mentor_phoneNo" className="form-label">Phone Number</label>
                            </div>
                            <input type="text" className="form-control" id="mentor_phoneNo" name="phoneNo" placeholder="+91 9078563412" onChange={handleInputChange}/>
                        </div>

                        {errors.phoneNo && 
                        <div className="error mb-2 mt-2" style={{fontSize:"13px", color: "red", marginLeft:"34%"}}>
                            <i className="bi bi-exclamation-circle"></i>&nbsp;&nbsp;
                            {errors.phoneNo}
                        </div>
                        }

                        {/* <div className="row-lg-12 mt-2 d-flex">
                            <div className="col-lg-4">
                                <label htmlFor="mentor_coursename" className="form-label">Course Name</label>
                            </div>
                            <select className="form-select" aria-label="Default select" id="mentor_coursename" name="course"
                                onChange={handleInputChange}>
                                <option defaultValue="">Choose Your Course</option>
                                <option value="Full Stack Developer - MERN">Full Stack Developer - MERN</option>
                                <option value="Java">Java</option>
                                <option value="PHP">PHP</option>
                                <option value="MySQL">MySQL</option>
                                <option value="Data Science">Data Science</option>
                                <option value="Big Data">Big Data</option>
                            </select>
                        </div>

                        {errors.course && 
                        <div className="error mb-2 mt-2" style={{fontSize:"13px", color: "red", marginLeft:"34%"}}>
                            <i className="bi bi-exclamation-circle"></i>&nbsp;&nbsp;
                            {errors.course}
                        </div>
                        } */}

                        <div className="row-lg-12 mt-2 d-flex">
                        <div className="col-lg-4">
                                <label htmlFor="address" className="form-label">Address</label>
                            </div>
                            <textarea className="form-control" placeholder="Type Address here" rows="3" id="address" onChange={handleInputChange}>
                            </textarea>
                        </div>

                        {errors.address && 
                        <div className="error mb-2 mt-2" style={{fontSize:"13px", color: "red", marginLeft:"34%"}}>
                            <i className="bi bi-exclamation-circle"></i>&nbsp;&nbsp;
                            {errors.address}
                        </div>
                        }

                        <div className="mt-3 text-center">
                            <button type="button" className="btn btn-primary" onClick={createAccount} style={{width:"40%"}}>
                                Create Account
                            </button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}