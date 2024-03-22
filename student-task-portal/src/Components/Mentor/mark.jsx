import { useContext, useState } from "react";
import { useLocation,Link } from "react-router-dom";
import { taskContext } from "../../Context/getTaskDetailsContext";

export default function Mark({state = {}})
{
    const location = useLocation();
    const data1  = location.state;
    console.log(data1.stu, data1.mentor, data1.task)
    const data = data1.mentor;
    const data2 = data1.stu;
    const {taskItem = []} = useContext(taskContext);
    const [formData, setFormData] = useState();
    let taskval = "", id = 0;
    let taskId = 0, task_comm = "", mark = "";
    {taskItem.map(({
        task_name,
        _id,
        submission_date, 
        submission_link,
        task_link, 
        comments, 
        mentor_comment,
        task_mark,
        studentId}, i) => {
            if(studentId.studentFullName === data1.stu)
            {
                if(data1.task === task_name){ 
                    taskval = task_name 
                    taskId = _id
                    mark = task_mark
                    task_comm = mentor_comment
                }
                if(mark === undefined && task_comm === undefined)
                {
                    id = 1;
                }
            }
        })}
        console.log(taskval, taskId, id, mark, task_comm)
    function handleTaskInput(e)
    {
        // mark = document.getElementById("task_mark").value;
        // comm = document.getElementById("mentor_comment").value;
        console.log(e.target.value, e.target.id)
        if (e) {
            const formCopy = {
              ...formData,
            };
            formCopy[e.target.id] = e.target.value;
            setFormData(formCopy);
          }
          //console.log("hi",mark, comm)
    }
    function handleMark(e)
    {
        e.preventDefault();
        console.log(e.target.value, e.target.id)
        // let taskname = document.getElementById("taskName").value;
        // console.log(taskname, "task");
        // taskItem.map((taskVal,i) => {
        //     if(data1.task === taskVal.task_name)
        //     {
        //         taskId = taskVal._id;            
        //     }
        // })
        console.log(taskId, "task")
        fetch(`https://studenttasksubmissionportal-database.onrender.com/api/task/update/${taskId}`,{
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
                                    &nbsp;&nbsp;Mark Submit
                            </a>
                        </li>  
                    </ul>
                    <Link to="/">
                        <a className="navbar-brand" href="#">{data1.mentor}</a>
                    </Link>
                    {/* <span className="navbar-brand" href="#">{data1.mentor}</span> */}
                </div>
                </div>
            </nav>
            <div className="container" style={{
                width: "45rem", 
                borderColor: "#bf80ff", 
                borderRadius: "15px",
                position: "absolute",
                top: "15%",
                left: "50%",
                transform: "translate(-50%, 0%)"
            }}>
                <Link to="/student_task" state={{ stu: data2, mentor: data}} style={{textDecoration: "none"}}>
                    <button type="button" class="btn btn-primary" style={{fontSize: "18px", width: "16%", marginLeft: "5%", marginTop: "0%"}}>
                    <i class="bi bi-caret-left-fill"></i>&nbsp;Back
                    </button>
                </Link>
                
            
                            <div className="card-body ms-4 mb-3 mt-3" style={{width: "42rem", border: "2px solid #aaff80", borderRadius: "12px"}}>
                            <div className="row-lg-12 ms-1 d-flex">
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
                                        {data1.stu}
                                    </label>
                                </div>
                            </div>

                            <div className="row-lg-12 mb-2 mt-2 ms-1 d-flex">
                                <div className="col-lg-3">
                                    <label htmlFor="" className="form-label" style={{fontSize:"16px"}}>
                                        Task Name
                                    </label>
                                </div>
                                <div className="col-lg-1">
                                    <span style={{fontWeight:"700"}}>:</span>
                                </div>
                                <div className="col-lg-8">
                                    <label htmlFor="" className="form-label" style={{fontWeight: "600", fontSize:"17px"}}>
                                        {taskval}
                                    </label>
                                </div>
                            </div>
                            {/* {taskItem.map(({
                        task_name,
                        submission_date, 
                        submission_link,
                        task_link, 
                        comments, 
                        mentor_comment,
                        task_mark,
                        studentId}, i) => (data1.task === task_name ?<div>         */}
                    {id === 1 ?
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
                        {/* {taskItem.map(({
                        task_name,
                        submission_date, 
                        submission_link,
                        task_link, 
                        comments, 
                        mentor_comment,
                        task_mark,
                        studentId}, i) => (data1.task === task_name ? */}
                    <input type="text" className="form-control" id="task_mark" value={mark} 
                            required style={{fontSize: "16px", width:"100%", height: "50px", borderRadius: "10px"}}
                            disabled readOnly/> 
                            {/* : ""))} */}
                    </div>
                    </div>
                    }
                    {id === 1 ?
                            <div className="row-lg-12 ms-1 d-flex">
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
                            <input type="text" className="form-control" id="mentor_comment" value={task_comm}
                                    required style={{fontSize: "16px", width:"100%", height: "60px", borderRadius: "10px"}}
                                    disabled readOnly/>
                            </div>
                            </div>
                        }

                        {id === 1 ?
                            <div className="text-center mt-3">
                                <button type="button" className="btn btn-outline-primary" 
                                    style={{width: "15%", color: "black", fontWeight: "bold"}}
                                        onClick={handleMark}>
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
{/*                 
                    : ""))}
                    </div> */}
            </div>
        </>
    )
}