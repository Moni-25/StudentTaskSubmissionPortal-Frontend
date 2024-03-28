import { useContext } from "react";
import { taskContext } from "../../Context/getTaskDetailsContext";
import { useLocation } from "react-router-dom";

export default function TaskDetails({state = {}})
{
    const location = useLocation();
    const { fromHome } = location.state;
    let data = fromHome.data;
    //console.log(data)
    const {taskItem = []} = useContext(taskContext);
    //console.log(taskItem)
    let keys, len = 0;
    taskItem.map((alltask, index1) => {
        keys={index1}
        //console.log(data, alltask.studentId.stu_username)
        if(data === alltask.studentId.stu_username)
        {
            len = len + 1;
            //console.log(len)
        }
        // console.log(alltask.task_link, alltask.comments, alltask.studentId.stu_username, 
        //     alltask.submission_date, alltask.task_mark);
    })

    return(
        <>
        {len > 0 ?
        (taskItem.map((alltask, index) => (data === alltask.studentId.stu_username ?
            <div className="card mt-2 mb-2" style={{margin: "auto", width: "60%", border: "2px solid #73AD21", padding: "10px"}}>
                {/* <div className="card-header">
                    Featured
                </div> */}
                
                <div className="card-body" key={`${index}`}>
                    <div className="container d-flex">
                        <div className="col-lg-8">
                            
                        {/* <label htmlFor="" style={{fontWeight: "600"}}>
                            Task Name:&nbsp;&nbsp;
                        </label> */}
                        <span style={{fontWeight: "700", color: " #7575a3", fontSize: "18px"}}>
                            {alltask.task_name}<br></br>
                        </span>
                        <label htmlFor="" style={{fontWeight: "600", marginTop: "5px", color: " #ff8080"}}>
                            Task Link:&nbsp;&nbsp;
                        </label>
                        <a href={alltask.task_link} style={{fontSize: "16px", color: " #7575a3"}}>
                            {alltask.task_link}
                        </a>
                        </div>
                        <div className="col-lg-4">
                        <span style={{fontWeight: "700", color: " #7575a3", fontSize: "18px"}}>
                            Submitted On {alltask.submission_date}<br></br>
                        </span>
                        {alltask.task_mark === undefined ?
                            <span style={{fontWeight: "700", color: " #ff3333", fontSize: "15px"}}>
                                yet to be graded
                            </span>
                        :
                            <span style={{fontWeight: "700", color: " #ff3333", fontSize: "15px"}}>
                                {alltask.task_mark}
                            </span>
                        }
                        </div>
                    </div>
                </div>
            </div>
        : "" ))) : 
        <div className="card mt-2 mb-2" style={{margin: "auto", width: "60%", border: "2px solid #73AD21", padding: "10px"}}>
            <div className="card-body text-center" style={{fontSize: "20px"}}>
            No Task Submit Yet
            </div>
        </div>}
        </>
    )
}