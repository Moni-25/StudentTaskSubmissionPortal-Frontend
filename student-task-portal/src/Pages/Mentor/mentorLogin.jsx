import { useContext, useState } from "react";
import { mentorContext } from "../../Context/getMentorContext";
import {Link, useNavigate} from "react-router-dom";

export default function MentorLogin()
{
    const {mentorDetails = []} = useContext(mentorContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        mentorUsername: "",
        mentorPassword: ""
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
        if (!formData.mentorUsername) {
          newErrors.mentorUsername = "Username is required";
          isValid = false;
        }
    
        // Validate password
        if (!formData.mentorUsername) {
          newErrors.mentorPassword= "Password is required";
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
            console.log("Form data:", formData);
            setSubmitted(true); // Set a submitted flag
          }
        console.log("Form data:", formData);
        const user = formData.mentorUsername;
        const pass = formData.mentorPassword;
        console.log(user, pass, "Mentor", mentorDetails);
        mentorDetails.map((mentorData, index) => {
            if(user === mentorData.mentor_username && pass === mentorData.mentor_password){
                login_status = "true";
                users = mentorData.mentor_username;
            }
        }
        )
        const data = users
        console.log(login_status)
        if(login_status === "true"){
            console.log(`${users} Login Successfully!!!`);
            alert(`${users} Logged In Successfully!!!`);
            navigate("/");
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
        
                <h5 className="mt-3 text-center">Mentor Login</h5>
        
                <div className="card-body">
                    <div className="">
                        <label htmlFor="username" className="form-label">Username</label><br></br>
                    </div>

                    <div className="mb-3" style={{display: "flex"}}>
                        <i className="bi bi-person-fill form-control"></i>
                        <input type="text" className="form-control" id="mentor_username" name="mentorUsername" placeholder="Username"
                            onChange={handleInputChange}/>
                    </div>

                    {errors.mentorUsername && 
                        <div className="error mb-2 ms-2" style={{fontSize:"13px", color: "red"}}>
                            <i className="bi bi-exclamation-circle"></i>&nbsp;&nbsp;
                            {errors.mentorPassword}
                    </div>}

                    <div className="mb-1">
                        <label htmlFor="password" className="form-label">Password</label><br></br>
                    </div>

                    <div className="mb-3" style={{display: "flex"}}>
                        <i className="bi bi-key-fill form-control"></i>
                        <input type="password" className="form-control" id="mentor_password" name="mentorPassword" 
                            placeholder="Password" required onChange={handleInputChange}/>
                    </div>

                    {errors.mentorPassword && 
                        <div className="error mb-2 ms-2" style={{fontSize:"13px", color: "red"}}>
                            <i className="bi bi-exclamation-circle"></i>&nbsp;&nbsp;
                            {errors.mentorPassword}
                    </div>}

                    <div className="mt-3 text-center">
                        <button type="button" className="btn btn-primary" onClick={handleButton}>Login</button>
                    </div>
                </div>
            </div>
            </div>
        </>
     )
}