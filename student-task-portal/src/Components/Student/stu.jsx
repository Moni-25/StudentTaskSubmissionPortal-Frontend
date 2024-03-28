import { useContext, useEffect, useState } from "react"
import "./student.css"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { studentContext } from "../../Context/getStudentContext";

export default function Stu()
{
    const {studentDetails = []} = useContext(studentContext);
    //console.log(studentDetails)
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        studentUsername: "",
        studentPassword: ""
      });
    
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    
    const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
          ...formData,
          [name]: value
        });
    };

    const validateForm = () => 
    {
        let isValid = true;
        const newErrors = {};
    
        // Validate email
        if (!formData.studentUsername) {
          newErrors.studentUsername = "Username is required";
          isValid = false;
        }
    
        // Validate password
        if (!formData.studentPassword) {
          newErrors.studentPassword = "Password is required";
          isValid = false;
        }
    
        setErrors(newErrors);
        return isValid;
    };

    // Login Submission
    var login_status = "false";
    function handleButton(e)
    {
        e.preventDefault();
        let users = "";
        if (validateForm()) {
            // Form is valid, you can submit or process the data here
            //console.log("Form data:", formData);
            setSubmitted(true); // Set a submitted flag
          }
        //console.log("Form data:", formData);
        const user = formData.studentUsername;
        const pass = formData.studentPassword;
        //console.log(user, pass, "student", studentDetails);
        studentDetails.map((stuData, index) => {
            if(user === stuData.stu_username && pass === stuData.stu_password){
                login_status = "true";
                users = stuData.stu_username;
            }
        }
        )
        const data = {users}
        //console.log(login_status)
        if(login_status === "true"){
            //console.log(`${users} Login Successfully!!!`);
            alert(`${users} Logged In Successfully!!!`);
            navigate("/student_portal", {state: data});
        }
        else{
            alert("Username or Password Incorrect");
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
                        <input type="text" className="form-control" id="student_username" name="studentUsername" placeholder="Username"
                            onChange={handleInputChange}/>
                    </div>

                    {errors.studentUsername && 
                        <div className="error mb-2 ms-2" style={{fontSize:"13px", color: "red"}}>
                            <i className="bi bi-exclamation-circle"></i>&nbsp;&nbsp;
                            {errors.studentUsername}
                    </div>}

                    <div className="mb-1">
                        <label htmlFor="password" className="form-label">Password</label><br></br>
                    </div>

                    <div className="mb-3" style={{display: "flex"}}>
                        <i className="bi bi-key-fill form-control"></i>
                        <input type="password" className="form-control" id="student_password" name="studentPassword" 
                            placeholder="Password" required onChange={handleInputChange}/>
                    </div>

                    {errors.studentPassword && 
                        <div className="error mb-2 ms-2" style={{fontSize:"13px", color: "red"}}>
                            <i className="bi bi-exclamation-circle"></i>&nbsp;&nbsp;
                            {errors.studentPassword}
                    </div>}

                    {/* <div className="mt-1 mb-2 text-end">
                        <a href="">Forgot Password?</a>
                    </div> */}

                    <div className="mt-3 text-center">
                        <button type="button" className="btn btn-primary" onClick={handleButton}>Login</button>
                    </div>

                    <div className="mt-3 text-center">
                        <Link to="/sign_up" style={{textDecoration: "none"}}>
                            <a>New User? Sign Up Here.....</a>
                        </Link>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}