import { useContext, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { studentContext } from "../../Context/getStudentContext";
import { taskContext } from "../../Context/getTaskDetailsContext";

export default function Task({val = {}})
{
    const location = useLocation();
    const { fromHome } = location.state;
    let data = fromHome.data;
    console.log("Day1-Task",data, val);

    const navigate = useNavigate();

    const {studentDetails = []} = useContext(studentContext);
    const {taskItem = []} = useContext(taskContext)

    // Handle Task Input
    const [taskData, setTaskData] = useState();
    var login_status = "false", stuId, taskId;

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(dd<10) 
    {
        dd='0'+dd;
    } 

    if(mm<10) 
    {
        mm='0'+mm;
    }
    today = dd+'/'+mm+'/'+yyyy;

    var taskStatus = "Submitted";
    
    function handleTaskInput(e)
    {
        //e.preventDefault();
        console.log(e.target.id, e.target.value);
        console.log(taskItem.length)
        studentDetails.map((task, index) => {
            if(data === task.studentFullName){
                login_status = "true";
                stuId = task._id;
                console.log(task.studentFullName, login_status, stuId)
            }
        }
        )
        let submit = document.getElementById("task_link").getAttribute("href");
        console.log("Submit", submit)
        if (e) {
            const taskCopy = {
              ...taskData,
              studentId: stuId,
              submission_date: today,
              task_status: taskStatus,
              task_link: submit,
              task_name: val
            };
            taskCopy[e.target.id] = e.target.value;
            setTaskData(taskCopy);
          } 
        
    }

    // Task Sumbit Function call
    var msg = "";
    function handleTaskSumbission(e)
    {
        // const taskLink = document.getElementById("task_link").value;
        // const comms = document.getElementById("comments").value;
        // console.log(taskLink, comms);
        //e.preventDefault();
        taskItem.map((t, i) => {
            if(val === t.task_name)
            {
                taskId = t._id
                console.log("TaskId", taskId)
            }
        })
        if(taskItem.length === 0)
        {
            fetch("http://localhost:5000/api/task/submit",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(taskData),
            })
            .then((response) => response.json())
            .then((response) => {if(response.message === "Task Submitted Successfully!!!")
            {
                console.log(msg)
                alert(`Hi ${data}, You had submitted task successfully!!!`);
                navigate("/class", {state:{fromHome: { data }}});
                window.location.reload();
            }})
            .catch((error) => console.log(error))
        }
        else{
            fetch(`http://localhost:5000/api/task/update_stutask/${taskId}`,{
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "PATCH",
            body: JSON.stringify(taskData),
        })
        .then((response) => response.json())
        .then((response) => {if(response.message === "Task Submiited Successfully!!!!"){
            alert(`Hi ${data}, Your task has been resubmitted successfully!!!`);
            navigate("/class", {state:{fromHome: { data }}});
            window.location.reload();
        }})
        .catch((error) => console.log(error))
        }
    }

    return(
        <>
            <div className="card ms-4 mt-2" style={{width: "50rem", padding: "0px", border: "2px solid #bfbfbf"}}>
                <div className="card-header" id="headingOne">
                    <div className="row-lg-12 d-flex">
                        <div className="col-lg-10">
                            <a href="https://docs.google.com/document/d/1QznT1zM4mI6dG0TODx5Xjs1GquMoSHO3xZ1USDnVM-w/preview"
                            id="task_link"  style={{fontFamily: "sans-serif", fontSize: "16px"}}>
                                https://docs.google.com/document/d/1QznT1zM4mI6dG0TODx5Xjs1GquMoSHO3xZ1USDnVM-w/preview</a>
                        </div>
                        <div className="col-lg-2">
                            <button className="btn btn-primary" data-toggle="collapse" data-target="#task" 
                                aria-expanded="true" aria-controls="task"
                                style={{width: "80%", height: "40px"}}>
                                Task
                            </button>
                        </div>
                    </div>
                </div>

                {/* Task Submission Process */}

                <div id="task" className="collapse" aria-labelledby="headingOne">
                    <div className="card-body">
                        <div className="mb-3">
                            <label htmlFor="link" className="form-label" style={{fontWeight: "600", color: "#3333ff"}}>Front-end Source Code</label>
                            <input type="text" className="form-control form-control-lg" id="submission_link" 
                                placeholder="Enter Front-end Source Code Link" required 
                                style={{fontSize: "16px", width:"100%", height: "45px", borderRadius: "10px"}}
                                    onChange={handleTaskInput}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="comment" className="form-label" style={{fontWeight: "600", color: "#3333ff"}}>Comments</label>
                            <input type="text" className="form-control" id="comments" placeholder="Leave Your Comments Here" 
                                required style={{fontSize: "16px", width:"100%", height: "45px", borderRadius: "10px"}}
                                onChange={handleTaskInput}/>
                        </div>
                        <div className="text-center">
                            <button type="button" className="btn btn-outline-primary" 
                                style={{width: "15%", color: "black", fontWeight: "bold"}}
                                    onClick={handleTaskSumbission}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}