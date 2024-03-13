
import { useState } from "react"
import welcomeLogo from "../../assets/Signup.jpg"
import { useNavigate } from "react-router-dom";

export default function SignUp()
{
    const navigate = useNavigate();
    const [formData, setFormData] = useState();
    function handleInputChange(e)
    {
        //e.preventDefault();
        console.log(e.target.value, e.target.id)
        if (e) {
            const formCopy = {
              ...formData,
            };
            formCopy[e.target.id] = e.target.value;
            setFormData(formCopy);
          }      
    }

    var msg = "";
    function createAccount(e)
    {
        e.preventDefault();
        fetch("http://localhost:5000/api/auth/create",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((response) => msg = response.message)
        .catch((error) => console.log(error))
        if(msg !== "")
        {
            alert("Account Created Successfully");
            navigate("/");
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
                            <input type="text" className="form-control" id="studentFullName" placeholder="Enter Fullname" onChange={handleInputChange}/>
                        </div>

                        <div className="row-lg-12 mt-3 d-flex">
                            <div className="col-lg-4">
                                <label htmlFor="email" className="form-label">Email</label>
                            </div>
                            <input type="text" className="form-control" id="email" placeholder="email@gmail.com" onChange={handleInputChange}/>
                        </div>

                        <div className="row-lg-12 mt-3 d-flex">
                            <div className="col-lg-4">
                                <label htmlFor="stu_username" className="form-label">Username</label>
                            </div>
                            <input type="text" className="form-control" id="stu_username" placeholder="Username" onChange={handleInputChange}/>
                        </div>

                        <div className="row-lg-12 mt-3 d-flex">
                            <div className="col-lg-4">
                                <label htmlFor="stu_password" className="form-label">Password</label>
                            </div>
                            <input type="password" className="form-control" id="stu_password" placeholder="Password" onChange={handleInputChange}/>
                        </div>

                        <div className="row-lg-12 mt-3 d-flex">
                            <div className="col-lg-4">
                                <label htmlFor="phoneno" className="form-label">Phone Number</label>
                            </div>
                            <input type="text" className="form-control" id="phoneNumber" placeholder="+91 9078563412" onChange={handleInputChange}/>
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