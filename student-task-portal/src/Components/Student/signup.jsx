
import { useCallback, useContext, useState } from "react"
import welcomeLogo from "../../assets/Signup.jpg"
import { useNavigate } from "react-router-dom";
import { studentContext } from "../../Context/getStudentContext";

export default function SignUp()
{
    const navigate = useNavigate();
    const {studentDetails = []} = useContext(studentContext);
    const [formData, setFormData] = useState({
        name: "",
        user: "",
        pass: "",
        email: "",
        phone: "",
        course: "",
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    let len = 0;
    const validateForm = () => 
    {
        let isValid = true;
        const newErrors = {};
    
        // Validate Form Fields
        {studentDetails.map(s => (formData.name === s.studentFullName ?  
            formData.name = "already": ""))}
        if (!formData.name) {
          newErrors.name = "Name is required";
          isValid = false;
        }
        if (formData.name === "already") {
            newErrors.name = "Name already exit";
            isValid = false;
        }

        {studentDetails.map(s => (formData.user === s.stu_username ?  
            formData.user = "already": ""))}
        if (!formData.user) {
            newErrors.user = "Username is required";
            isValid = false;
        }
        if (formData.user === "already") {
            newErrors.user = "Username already exit";
            isValid = false;
        }
        
        if (!formData.pass) {
            newErrors.pass = "Password is required";
            isValid = false;
          }
          {studentDetails.map(s => (formData.email === s.email ?  
            formData.email = "already": ""))}  
        if (!formData.email) {
          newErrors.email = "Email is required";
          isValid = false;
        }
        if (formData.email === "already") {
            newErrors.email = "Email already exit";
            isValid = false;
        }

        {studentDetails.map(s => (formData.phone === s.phoneNumber ?  
            formData.phone = "already": ""))}  
        if (!formData.phone) {
            newErrors.phone = "Phone Number is required";
            isValid = false;
          }
         
          len = formData.phone;
          console.log(len.length)
          if (formData.phone === "already") {
              newErrors.phone = "Phone Number Already Exit";
            isValid = false;
          }
          if(len.length != 10){
            newErrors.phone = "Phone Number Invalid";
          isValid = false;
        }
          
        if (!formData.course) {
          newErrors.course = "Course Name is required";
          isValid = false;
        }
    
        setErrors(newErrors);
        return isValid;
    };
    let taskname = [], htmlTask =[];
    function handleInputChange(e)
    {
        //e.preventDefault();
        //console.log(e.target.value, e.target.id)      
        const { name, value } = e.target;
        if(e.target.value === "Javascript")
        {
            taskname = ["JavaScript - Day -1: Introduction to Browser & web", 
            "JavaScript - Day -2: Datatypes", "JavaScript - Day -3: JS array & objects",
    "JavaScript - Day -4: Functions", "JavaScript - Day -6: OOP in JS", "JavaScript - Day -7: Array methods"]
        }
        else if(e.target.value === "Html & CSS")
        {
            taskname =["HTML- Day-1: HTML",
                        "HTML & CSS- Day -2: HTML & CSS",
                        "HTML & CSS- Day-3: HTML & CSS",
                        "HTML & CSS- Day-4: HTML & CSS",
                        "Day -5: HTML & CSS"]
        }
        if (e) {
            const formCopy = {
              ...formData,
              taskName: taskname,
              [name]: value
            };
            formCopy[e.target.id] = e.target.value;
            setFormData(formCopy);
          }      
    }

    var msg = "";
    function createAccount(e)
    {
        e.preventDefault();
        if (validateForm()) {
            // Form is valid, you can submit or process the data here
            //console.log("Form data:", formData);
            setSubmitted(true); // Set a submitted flag
          }
          if(formData.user !== "already" && formData.email !== "already" && formData.phone !== "already" && len.length === 10){
        fetch("https://studenttasksubmissionportal-database.onrender.com/api/auth/create",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((response) => {if(response.message === "Student Account Created Successfully!!!")
        {
            //console.log(msg)
            alert("Student Account Created Successfully");
            navigate("/");
            window.location.reload();
        }})
        .catch((error) => console.log(error));
    }
    }
    return(
        <>
        <div className="container-fluid" style={{backgroundColor: "#a3a3c2"}}>
            <div className="row-lg-12 d-flex" 
                style={{height: "100vh"}}>
                <div className="col-lg-1"></div>
                <div className="col-lg-4 mt-5 ms-5" style={{padding: "0px"}}>
                    
                    <img src={welcomeLogo} alt="Hai" height={"91%"} width={"100%"} style={{borderRadius: "15px"}}/>
                </div>
                <div className="container" style={{backgroundColor: "#a3a3c2", padding: "0px"}}>
                <div className="col-lg-5" style={{padding: "0px"}}>
                <div className="card mt-5" style={{width: "33rem", borderColor: "white", height: "33rem", borderRadius: "15px"}}>
            
                    <h4 className="mt-3 text-center">Registration</h4>
            
                    <div className="card-body">
                        <div className="row-lg-12 d-flex">
                            <div className="col-lg-4">
                                <label htmlFor="fullname" className="form-label">Fullname</label>
                            </div>
                            <input type="text" className="form-control" id="studentFullName" name="name" placeholder="Enter Fullname" onChange={handleInputChange}/>
                        </div>

                        {errors.name && 
                        <div className="error mb-2 mt-2" style={{fontSize:"13px", color: "red", marginLeft:"34%"}}>
                            <i className="bi bi-exclamation-circle"></i>&nbsp;&nbsp;
                            {errors.name}
                        </div>
                        }

                        <div className="row-lg-12 mt-3 d-flex">
                            <div className="col-lg-4">
                                <label htmlFor="email" className="form-label">Email</label>
                            </div>
                            <input type="text" className="form-control" id="email" name="email" placeholder="email@gmail.com" onChange={handleInputChange}/>
                        </div>

                        {errors.email && 
                        <div className="error mb-2 mt-2" style={{fontSize:"13px", color: "red", marginLeft:"34%"}}>
                            <i className="bi bi-exclamation-circle"></i>&nbsp;&nbsp;
                            {errors.email}
                        </div>
                        }

                        <div className="row-lg-12 mt-3 d-flex">
                            <div className="col-lg-4">
                                <label htmlFor="stu_username" className="form-label">Username</label>
                            </div>
                            <input type="text" className="form-control" id="stu_username" name="user" placeholder="Username" onChange={handleInputChange}/>
                        </div>

                        {errors.user && 
                        <div className="error mb-2 mt-2" style={{fontSize:"13px", color: "red", marginLeft:"34%"}}>
                            <i className="bi bi-exclamation-circle"></i>&nbsp;&nbsp;
                            {errors.user}
                        </div>
                        }

                        <div className="row-lg-12 mt-3 d-flex">
                            <div className="col-lg-4">
                                <label htmlFor="stu_password" className="form-label">Password</label>
                            </div>
                            <input type="password" className="form-control" id="stu_password" name="pass" placeholder="Password" onChange={handleInputChange}/>
                        </div>

                        {errors.pass && 
                        <div className="error mb-2 mt-2" style={{fontSize:"13px", color: "red", marginLeft:"34%"}}>
                            <i className="bi bi-exclamation-circle"></i>&nbsp;&nbsp;
                            {errors.pass}
                        </div>
                        }

                        <div className="row-lg-12 mt-3 d-flex">
                            <div className="col-lg-4">
                                <label htmlFor="phoneno" className="form-label">Phone Number</label>
                            </div>
                            <input type="text" name="phone" className="form-control" id="phoneNumber" placeholder="+91 9078563412" onChange={handleInputChange}/>
                        </div>

                        {errors.phone && 
                        <div className="error mb-2 mt-2" style={{fontSize:"13px", color: "red", marginLeft:"34%"}}>
                            <i className="bi bi-exclamation-circle"></i>&nbsp;&nbsp;
                            {errors.phone}
                        </div>
                        }

                        <div className="row-lg-12 mt-3 d-flex">
                            <div className="col-lg-4">
                                <label htmlFor="coursename" className="form-label">Course Name</label>
                            </div>
                            <select class="form-select" aria-label="Default select" id="courseName" name="course"
                                onChange={handleInputChange}>
                                <option selected>Choose Your Course</option>
                                <option value="Javascript">Javascript</option>
                                <option value="Html & CSS">Html & CSS</option>
                            </select>
                        </div>

                        {errors.course && 
                        <div className="error mb-2 mt-2" style={{fontSize:"13px", color: "red", marginLeft:"34%"}}>
                            <i className="bi bi-exclamation-circle"></i>&nbsp;&nbsp;
                            {errors.course}
                        </div>
                        }

                        <div className="mt-3 text-center">
                            <button type="button" className="btn btn-primary" onClick={createAccount} style={{width: "30%"}}>
                                Create Account
                            </button>
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