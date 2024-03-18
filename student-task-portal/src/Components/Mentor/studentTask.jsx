import { useContext } from "react";
import { useLocation,Link } from "react-router-dom";
import { studentContext } from "../../Context/getStudentContext";
import { taskContext } from "../../Context/getTaskDetailsContext";

export default function StudentTaskDetails()
{
    const location = useLocation();
    const data1  = location.state;
    console.log(data1)
    const { studentDetails = [] } = useContext(studentContext);
    const { taskItem = [] } = useContext(taskContext);
    console.log(taskItem)
    function handleTaskInput(e)
    {

    }
    function handleTaskSumbission()
    {

    }
    return(
        <>
             {/* <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" 
                        aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation"
                            style={{color: "black", border: "2px solid black"}}>
                            <i className="bi bi-distribute-vertical"></i>
                    </button>
                <div className="collapse navbar-collapse" tabindex="-1" id="navbarToggler" aria-labelledby="offcanvasDarkNavbarLabel"> 
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/assign_mentor" state={{ fromHome: { data }}} style={{textDecoration: "none"}}>
                                <a className="nav-link" href="#">
                                <i className="bi bi-person-circle"></i>
                                        &nbsp;&nbsp;Profile
                                </a>
                            </Link>
                        </li>   
                        <li className="nav-item">
                        <Link to="/stu_list" state={{ fromHome: { data }}} style={{textDecoration: "none"}}>
                            <a className="nav-link active" aria-current="page" href="#">
                            <i className="bi bi-list-task"></i>
                                    &nbsp;&nbsp;Student List
                            </a>
                        </Link>
                        </li>  
                    </ul>
                    <span className="navbar-brand" href="#">{data}</span>
                </div>
                </div>
            </nav> */}
            <div className="container">
                <div className="col-lg-12 mt-4" style={{padding: "0px"}}>
                <div className="card" style={{
                        width: "45rem", 
                        borderColor: "#bf80ff", 
                        borderRadius: "15px",
                        position: "absolute",
                        top: "0%",
                        left: "50%",
                        transform: "translate(-50%, 0%)"
                        }}>
            
                    <h5 className="mt-3 text-center" style={{fontWeight: "700"}}>Task Evaluation</h5>
                    {studentDetails.map((stuData, i) => (data1 === stuData.studentFullName ?
                    <div className="card-body">
                        <div className="row-lg-12 mt-2 d-flex">
                            <div className="col-lg-3">
                                <label htmlFor="mentor_username" className="form-label" style={{fontSize:"16px"}}>
                                    Student Name
                                </label>
                            </div>
                            <div className="col-lg-1">
                                <span style={{fontWeight:"700"}}>:</span>
                            </div>
                            <div className="col-lg-8">
                                <label htmlFor="mentor_username" className="form-label" style={{fontWeight: "600", fontSize:"17px"}}>
                                    {stuData.studentFullName}
                                </label>
                            </div>
                        </div>

                        <div className="row-lg-12 mt-2 d-flex">
                            <div className="col-lg-3">
                                <label htmlFor="mentor_username" className="form-label" style={{fontSize:"16px"}}>
                                    Email
                                </label>
                            </div>
                            <div className="col-lg-1">
                                <span style={{fontWeight:"700"}}>:</span>
                            </div>
                            <div className="col-lg-8">
                                <label htmlFor="mentor_username" className="form-label" style={{fontWeight: "600", fontSize:"17px"}}>
                                    {stuData.email}
                                </label>
                            </div>
                        </div>

                        <div className="row-lg-12 mt-2 d-flex">
                            <div className="col-lg-3">
                                <label htmlFor="mentor_username" className="form-label" style={{fontSize:"16px"}}>
                                    Course
                                </label>
                            </div>
                            <div className="col-lg-1">
                                <span style={{fontWeight:"700"}}>:</span>
                            </div>
                            <div className="col-lg-8">
                                <label htmlFor="mentor_username" className="form-label" style={{fontSize:"17px", fontWeight:"700"}}>
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
                        studentId}, i) => (data1 === studentId.studentFullName ?
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
                            <input type="text" className="form-control" id="comments" placeholder="Leave Your Mark out of 10" 
                                    required style={{fontSize: "16px", width:"100%", height: "60px", borderRadius: "10px"}}
                                    onChange={handleTaskInput}/>
                            </div>
                            </div>

                            <div className="text-center">
                                <button type="button" className="btn btn-outline-primary" 
                                    style={{width: "15%", color: "black", fontWeight: "bold"}}
                                        onClick={handleTaskSumbission}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    : ""))}
                </div>
                </div>
            </div>
        </>
     )
}