import { useContext, useState } from "react";
import { useLocation,Link, useNavigate } from "react-router-dom";
import { studentContext } from "../../Context/getStudentContext";
import { taskContext } from "../../Context/getTaskDetailsContext";

export default function StudentTaskDetails()
{
    const location = useLocation();
    const data1  = location.state;
    console.log(data1.stu, data1.mentor)
    const data = data1.mentor;
    const navigate = useNavigate();
    const { studentDetails = [] } = useContext(studentContext);
    const { taskItem = [] } = useContext(taskContext);
    console.log(taskItem)
    const [formData, setFormData] = useState();
    let mark = "", comm = "";
    function handleTaskInput(e)
    {
        mark = document.getElementById("task_mark").value;
        comm = document.getElementById("mentor_comment").value;
        console.log(e.target.value)
        if (e) {
            const formCopy = {
              ...formData,
            };
            formCopy[e.target.id] = e.target.value;
            setFormData(formCopy);
          }
          console.log("hi",mark, comm)
    }
    console.log("hi",mark, comm)
    var no_record = "false";
    {taskItem.map(({studentId},i) => {
        if(data1.stu !== studentId.studentFullName)
        {
            no_record = "true";
        }
    })}
    function handleMentor(e)
    {
        e.preventDefault();
        console.log(e.target.value, e.target.id)
        let taskId = 0;
        let taskname = document.getElementById("taskName").value;
        console.log(taskname);
        taskItem.map((taskVal,i) => {
            if(taskname === taskVal.task_name)
            {
                taskId = taskVal._id;            
            }
        })
        console.log(taskId)
        fetch(`http://localhost:5000/api/task/update/${taskId}`,{
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "PATCH",
            body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((response) => {if(response.message === "Task Reviewed Successfully!!!!"){
            alert(`${data1.stu} task had reviewed successfully`);
            //navigate("/student_task", {state:  data1})
            window.location.reload();
        }})
        .catch((error) => console.log(error))
    }
    return(
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
                            <a className="nav-link active" aria-current="page" href="#">
                            <i class="bi bi-file-earmark-bar-graph-fill"></i>
                                    &nbsp;&nbsp;Student Task Evaluation
                            </a>
                        </li>  
                    </ul>
                    <span className="navbar-brand" href="#">{data1.mentor}</span>
                </div>
                </div>
            </nav>
            <div className="container">
                <Link to="/stu_list" state={{ fromHome: { data }}} style={{textDecoration: "none"}}>
                    <button type="button" class="btn btn-primary" style={{fontSize: "18px", width: "8%", marginLeft: "18%", marginTop: "2%"}}>
                    <i class="bi bi-caret-left-fill"></i>&nbsp;Back
                    </button>
                </Link>
                <div className="col-lg-12" style={{padding: "0px", marginTop: "2%"}}>
                <div className="card" style={{
                        width: "45rem", 
                        borderColor: "#bf80ff", 
                        borderRadius: "15px",
                        position: "absolute",
                        top: "0%",
                        left: "50%",
                        transform: "translate(-50%, 0%)"
                        }}>
            
                    <div className="mt-3 text-center text-header" style={{marginLeft: "25%", fontSize: "20px", fontWeight: "700", backgroundColor: "#668cff", width: "50%", height: "35px"}}>
                        Task Evaluation
                    </div>
                    {studentDetails.map((stuData, i) => (data1.stu === stuData.studentFullName ?
                    <div className="card-body">
                        <div className="row-lg-12 mt-2 d-flex">
                            <div className="col-lg-3">
                                <label htmlFor="" className="form-label" style={{fontSize:"16px"}}>
                                    Student Name
                                </label>
                            </div>
                            <div className="col-lg-1">
                                <span style={{fontWeight:"700"}}>:</span>
                            </div>
                            <div className="col-lg-8">
                                <label htmlFor="" className="form-label" style={{fontWeight: "600", fontSize:"17px"}}>
                                    {stuData.studentFullName}
                                </label>
                            </div>
                        </div>

                        <div className="row-lg-12 mt-2 d-flex">
                            <div className="col-lg-3">
                                <label htmlFor="" className="form-label" style={{fontSize:"16px"}}>
                                    Email
                                </label>
                            </div>
                            <div className="col-lg-1">
                                <span style={{fontWeight:"700"}}>:</span>
                            </div>
                            <div className="col-lg-8">
                                <label htmlFor="" className="form-label" style={{fontWeight: "600", fontSize:"17px"}}>
                                    {stuData.email}
                                </label>
                            </div>
                        </div>

                        <div className="row-lg-12 mt-2 d-flex">
                            <div className="col-lg-3">
                                <label htmlFor="" className="form-label" style={{fontSize:"16px"}}>
                                    Course
                                </label>
                            </div>
                            <div className="col-lg-1">
                                <span style={{fontWeight:"700"}}>:</span>
                            </div>
                            <div className="col-lg-8">
                                <label htmlFor="" className="form-label" style={{fontSize:"17px", fontWeight:"700"}}>
                                    {stuData.courseName}
                                </label>
                            </div>
                        </div>
                    </div>
                    : ""))}
                    {taskItem.map(({
                        task_name,
                        submission_date, 
                        submission_link,
                        task_link, 
                        comments, 
                        mentor_comment,
                        task_mark,
                        studentId}, i) => (data1.stu === studentId.studentFullName ?
                        <div className="card-body ms-4 mb-3" style={{width: "42rem", border: "2px solid #aaff80", borderRadius: "12px"}}>
                            <div className="row-lg-12 ms-1 d-flex">
                            <div className="col-lg-3">
                                <label htmlFor="" className="form-label" style={{fontSize:"16px"}}>
                                    Task Name 
                                </label>
                            </div>
                            <div className="col-lg-1">
                                <span style={{fontWeight:"700"}}>:</span>
                            </div>
                            <div className="col-lg-8">
                                <label htmlFor="" className="form-label" style={{fontSize:"16px", fontWeight: "700"}}>
                                    {task_name}
                                    <input type="text" className="form-control" id="taskName" value={task_name} required hidden readOnly/>
                                </label>
                            </div>
                            </div>

                            <div className="row-lg-12 ms-1 d-flex">
                            <div className="col-lg-3">
                                <label htmlFor="" className="form-label" style={{fontSize:"16px"}}>
                                    Task Link 
                                </label>
                            </div>
                            <div className="col-lg-1">
                                <span style={{fontWeight:"700"}}>:</span>
                            </div>
                            <div className="col-lg-8">
                                <a href={task_link} style={{fontSize:"16px", textDecoration: "underline"}}>Day-1: Javascript</a>
                            </div>
                            </div>

                            <div className="row-lg-12 ms-1 d-flex">
                            <div className="col-lg-3">
                                <label htmlFor="" className="form-label" style={{fontSize:"16px"}}>
                                    Task Submission Link 
                                </label>
                            </div>
                            <div className="col-lg-1">
                                <span style={{fontWeight:"700"}}>:</span>
                            </div>
                            <div className="col-lg-8">
                                <a href={submission_link} style={{fontSize:"16px", textDecoration: "underline"}}>
                                    {submission_link}
                                </a>
                            </div>
                            </div>
                            
                            <div className="row-lg-12 ms-1 mt-1 d-flex">
                            <div className="col-lg-3">
                                <label htmlFor="" className="form-label" style={{fontSize:"16px"}}>
                                    Submission Date 
                                </label>
                            </div>
                            <div className="col-lg-1">
                                <span style={{fontWeight:"700"}}>:</span>
                            </div>
                            <div className="col-lg-8">
                                <label htmlFor="" className="form-label" style={{fontSize:"17px", fontWeight:"600"}}>
                                    {submission_date}
                                </label>
                            </div>
                            </div>
                            
                            <div className="row-lg-12 ms-1 mt-1 d-flex">
                            <div className="col-lg-3">
                                <label htmlFor="" className="form-label" style={{fontSize:"16px"}}>
                                    Task Status 
                                </label>
                            </div>
                            <div className="col-lg-1">
                                <span style={{fontWeight:"700"}}>:</span>
                            </div>
                            <div className="col-lg-8">
                                <label htmlFor="" className="form-label" style={{fontSize:"17px", fontWeight:"600"}}>
                                    {comments}
                                </label>
                            </div>
                            </div>
                            
                            {task_mark === undefined ?
                            <div className="row-lg-12 ms-1 mt-1 d-flex">
                            <div className="col-lg-3">
                                <label htmlFor="" className="form-label" style={{fontSize:"16px"}}>
                                    Task Mark <span style={{color:"red", fontSize: "20px"}}>*</span>
                                </label>
                                <p style={{color: "red", fontSize: "13px"}}>Note: Evaluate task and give mark out of 10</p>
                            </div>
                            <div className="col-lg-1">
                                <span style={{fontWeight:"700"}}>:</span>
                            </div>
                            <div className="col-lg-8">
                            <input type="text" className="form-control" id="task_mark" placeholder="Leave Your Mark out of 10" 
                                    required style={{fontSize: "16px", width:"100%", height: "50px", borderRadius: "10px"}}
                                    onChange={handleTaskInput}/>
                            </div>
                            </div>
                            :
                            <div className="row-lg-12 ms-1 mt-1 d-flex">
                            <div className="col-lg-3">
                                <label htmlFor="" className="form-label" style={{fontSize:"16px"}}>
                                    Task Mark <span style={{color:"red", fontSize: "20px"}}>*</span>
                                </label>
                                <p style={{color: "red", fontSize: "13px"}}>Note: Evaluate task and give mark out of 10</p>
                            </div>
                            <div className="col-lg-1">
                                <span style={{fontWeight:"700"}}>:</span>
                            </div>
                            <div className="col-lg-8">
                            <input type="text" className="form-control" id="task_mark" value={task_mark} 
                                    required style={{fontSize: "16px", width:"100%", height: "50px", borderRadius: "10px"}}
                                    disabled readOnly/>
                            </div>
                            </div>
                            }

                            {mentor_comment === undefined ?
                            <div className="row-lg-12 ms-1 mt-1 d-flex">
                            <div className="col-lg-3">
                                <label htmlFor="" className="form-label" style={{fontSize:"16px"}}>
                                    Comments <span style={{color:"red", fontSize: "20px"}}>*</span>
                                </label>
                            </div>
                            <div className="col-lg-1">
                                <span style={{fontWeight:"700"}}>:</span>
                            </div>
                            <div className="col-lg-8">
                            <input type="text" className="form-control" id="mentor_comment" placeholder="Enter Task Comments"
                                    required style={{fontSize: "16px", width:"100%", height: "60px", borderRadius: "10px"}}
                                    onChange={handleTaskInput}/>
                            </div>
                            </div>
                            :
                            <div className="row-lg-12 ms-1 mt-1 d-flex">
                            <div className="col-lg-3">
                                <label htmlFor="" className="form-label" style={{fontSize:"16px"}}>
                                    Comments <span style={{color:"red", fontSize: "20px"}}>*</span>
                                </label>
                            </div>
                            <div className="col-lg-1">
                                <span style={{fontWeight:"700"}}>:</span>
                            </div>
                            <div className="col-lg-8">
                            <input type="text" className="form-control" id="mentor_comment" value={mentor_comment}
                                    required style={{fontSize: "16px", width:"100%", height: "60px", borderRadius: "10px"}}
                                    disabled readOnly/>
                            </div>
                            </div>
                            }

                            {task_mark === undefined && mentor_comment === undefined ?
                            <div className="text-center mt-3">
                                <button type="button" className="btn btn-outline-primary" 
                                    style={{width: "15%", color: "black", fontWeight: "bold"}}
                                        onClick={handleMentor}>
                                    Submit
                                </button>
                            </div>
                            :
                            <div className="text-center mt-3">
                            <button type="button" className="btn btn-outline-primary" 
                                style={{width: "15%", color: "black", fontWeight: "bold"}}
                                    hidden>
                                Submit
                            </button>
                        </div>
                        }
                            
                        </div>
                    : ""))}
                {no_record === "true" ? 
                        <div className="card-body ms-4 mb-3" style={{width: "42rem", border: "2px solid #aaff80", borderRadius: "12px"}}>
                            <h6 style={{fontWeight: "700"}}>No Task Submitted</h6>
                        </div> : ""} 
                </div>  
                </div>         
            </div>
        </>
     )
}