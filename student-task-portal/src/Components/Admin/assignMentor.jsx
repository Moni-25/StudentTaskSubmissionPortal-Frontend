import { useContext, useState } from "react";
import { mentorContext } from "../../Context/getMentorContext";
import { studentContext } from "../../Context/getStudentContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function AssignMentor()
{
    const location = useLocation();
    const { fromHome } = location.state;
    let data = fromHome.data;
    //console.log(data)
    const navigate = useNavigate();
    const {studentDetails = []} = useContext(studentContext);
    const {mentorDetails = []} = useContext(mentorContext);
    const [formData, setFormData] = useState();
    const [courseData, setCourse] = useState();
  
    const [userinfo, setUserInfo] = useState({
        languages: [],
        response: [],
    });

    var stu_id = [], men_id = 0, stu_course = [];

    function handleCheckBoxChange(e)
    {
        const { value, checked } = e.target;
        const { languages } = userinfo;
 
        //console.log(`${value} is ${checked}`);

        if (checked) {
            setUserInfo({
                languages: [...languages, value],
                response: [...languages, value],
            });
        }
        else {
            setUserInfo({
                languages: languages.filter(
                    (e) => e !== value
                ),
                response: languages.filter(
                    (e) => e !== value
                ),
            });
        }
    }
    //console.log("Check",userinfo.languages)  
    function handleInputChange(e)
    {
        //e.preventDefault();
        //console.log(e.target.value, e.target.id)
        studentDetails.map((stuVal, index) => {
            for(let i = 0; i < (userinfo.languages).length; i++)
            {
                //console.log(userinfo.languages[i], stuVal.studentFullName)
            
                if(userinfo.languages[i] == stuVal.studentFullName)
                {
                    stu_id[i] = stuVal._id;
                    stu_course[i] = stuVal.courseName;
                    //console.log(stu_id, stuVal.studentFullName)
                    break;
                }}      
        })
        mentorDetails.map((menVal) => {
            if(e.target.value == menVal.mentorName)
            {
                men_id = menVal._id;
                console.log(men_id, menVal.mentorName)
            } 
        })
        console.log(userinfo)
        if (e) {
            const formCopy = {
              ...formData,
              mentor: men_id,
              stud_list: stu_id
            };
            formCopy[e.target.id] = e.target.value;
            setFormData(formCopy);
          } 
    }
    var msg = "", a = 1;
    function assignMentor(e)
    {
        //e.preventDefault();
        //console.log(e.target.value, e.target.id)
        // let mentor = "Boun", menId;
        // console.log("mentor",mentorDetails)
        // mentorDetails.map((menVal) => {
        //     if(mentor === menVal.mentor_username)
        //     {
        //         menId = menVal._id;            }
        // })
        // console.log(menId)
        // fetch(`http://localhost:5000/api/mentor/assign_student/${menId}`,{
        //     headers: {
        //         Accept: "application/json",
        //         "Content-Type": "application/json",
        //     },
        //     method: "PATCH",
        //     body: JSON.stringify(formData),
        // })
        // .then((response) => response.json())
        // .then((response) => console.log(response))
        // .catch((error) => console.log(error))
        fetch("https://studenttasksubmissionportal-database.onrender.com/api/auth/update_mentor",{
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
        fetch("https://studenttasksubmissionportal-database.onrender.com/api/mentor/assign_mul_students",{
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "PATCH",
            body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((response) => {if(response.message === "Students Added Successfully!!!!"){
            alert("Mentor Assigned Successfully");
            navigate("/mentor_list", {state:{ fromHome: { data }}})
            window.location.reload();
        }})
        .catch((error) => console.log(error))
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
                                <a className="nav-link active" href="#">
                                <i className="bi bi-speedometer2"></i>
                                        &nbsp;&nbsp;Assign Mentor
                                </a>
                            </Link>
                        </li>   
                        <li className="nav-item">
                        <Link to="/mentor" state={{ fromHome: { data }}} style={{textDecoration: "none"}}>
                            <a className="nav-link" aria-current="page" href="#">
                            <i className="bi bi-person-video"></i>
                                    &nbsp;&nbsp;Create Mentor
                            </a>
                        </Link>
                        </li>  
                    </ul>
                    <Link to="/">
                        <a className="navbar-brand" href="#">{data}</a>
                    </Link>
                    {/* <span className="navbar-brand" href="#">{data}</span> */}
                </div>
                </div>
            </nav>

        <div className="container">
                <div className="col-lg-12 mt-5" style={{padding: "0px"}}>
                <div className="card" style={{
                        width: "33rem", 
                        borderColor: "#bf80ff", 
                        borderRadius: "15px",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, 0%)"
                        }}>
            
                    <h5 className="mt-3 text-center" style={{fontWeight: "700"}}>Assign Mentor To Student</h5>
            
                    <div className="card-body">
                        <div className="row-lg-12 d-flex">
                            <div className="col-lg-3">
                                <label htmlFor="name" className="form-label mt-3" style={{fontSize: "17px", fontWeight:"600"}}>
                                    Students
                                </label>
                            </div>

                            {/* <select className="form-select" aria-label="Default select" id="name" onChange={handleInputChange}>
                                {studentDetails.map((stuData, index) => 
                                    <option value={stuData.studentFullName}>{stuData.studentFullName} - {stuData.courseName}</option>
                                )}
                            </select> */}
                            <div className="form-check m-3 col-lg-8">
                            {studentDetails.map(({studentFullName, courseName, mentorId}, i) => 
                            (!mentorId ?
                            <div>
                                <input
                                className="form-check-input"
                                type="checkbox"
                                name="languages"
                                value={studentFullName}
                                id="courseName"
                                onChange={
                                            handleCheckBoxChange
                                        }
                                />
                                <label className="form-check-label" htmlFor="courseName">
                                    {studentFullName} - {courseName}
                                </label>
                            </div>
                            : ""))}
                            {/* : "No Student Found")) */}
                            </div>
                        </div>

                        <div className="row-lg-12 mt-3 d-flex">
                            <div className="col-lg-3">
                                <label htmlFor="name" className="form-label mt-1" style={{fontSize: "17px", fontWeight:"600"}}>
                                    Mentor
                                </label>
                            </div>
                            
                            <select className="form-select" aria-label="Default select" id="mentorName" onChange={handleInputChange}>
                                <option value="" selected>Choose Mentor For Student</option>
                                {mentorDetails.map(({mentorName, studentId}, index) => 
                                (studentId.length === 0 ? 
                                    <option value={mentorName}>{mentorName}</option>
                                    : ""
                                ))}
                            </select>
                        </div>

                        <div className="mt-4 text-center">
                            <button type="button" className="btn btn-primary" onClick={assignMentor} style={{width: "40%"}}>
                                Assign Mentor
                            </button>
                        </div>
                    </div>
                </div>
                </div>
        </div>
        </>
    )
}