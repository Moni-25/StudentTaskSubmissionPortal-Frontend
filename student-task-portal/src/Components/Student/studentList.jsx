import { useContext } from "react"
import { taskContext } from "../../Context/getTaskDetailsContext"
import { mentorContext } from "../../Context/getMentorContext";
import { useLocation, Link } from "react-router-dom";
import StudentTaskDetails from "../Mentor/studentTask";

export default function StudentList()
{
    const location = useLocation();
    const { fromHome } = location.state;
    let data = fromHome.data;
    //console.log(data)
    const {taskItem = []} = useContext(taskContext);
    const {mentorDetails = []} = useContext(mentorContext);
    var email = [], stuName = [], id =0;
    
    const men = [{
      categories: [{email}],
        stuName
    }
    ]
    //console.log(mentorDetails)
    var len = 0;
    mentorDetails.map(menlen => {
      if(data === menlen.mentorName)
        {       
          if(menlen.studentId.length !== 0)
          {
              len = 1;
              console.log(len, menlen.studentId.length)
          }
        }
    })
    console.log(len)
    mentorDetails.map((menData, index) => {
        //console.log("Data", data, menData.mentorName)
        for(let i = 0; i < (menData.studentId).length; i++)
        {
            if(data === menData.mentorName)
            {
                //console.log("Student", menData.studentId[i].studentFullName, menData.studentId[i].email)
                email[i] = menData.studentId[i].email;
                stuName[i] = menData.studentId[i].studentFullName;
            }
          }   
      });
     //console.log("Email", email, men, len)
    return(
        <div className="mt-5">
          <table className="table table-bordered table-hover" style={{border: "2px solid #66b3ff"}}>
            <thead>
              <tr className="table-danger text-center">
                <th>Sl.No</th>
                <th>Student Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Course Name</th>
                <th>Task</th>
              </tr>
            </thead>
              {len === 1 ?      
          (mentorDetails.map(({mentorName, studentId}, i) => (
            <tbody>
            {data == mentorName ?
                studentId.map(({studentFullName,email, phoneNumber, courseName}, index) => (  //console.log(data.Description)) )                        
                // <div key={index}>
                  <tr className="text-center">
                    <td>{index + 1}</td>
                    <td>{studentFullName}</td>
                    <td>{email}</td>
                    <td>{phoneNumber}</td>
                    <td>{courseName}</td>
                    <td>
                    <Link to="/student_task" state={{stu : studentFullName,mentor: data}}>
                      <button type="button" class="btn btn-primary" style={{width: "80%", height: "35px"}}>
                          Task
                      </button>
                    </Link>
                    </td>
                  </tr>

                // </div>
                ))
            : ""}   
            </tbody>
          ))) : 
          <tbody>
              <tr style={{textAlign: "center", fontSize: "19px", padding: "5px 5px"}}>
                <td colSpan="6">No Student Assigned Yet</td>
              </tr>
          </tbody>}

            {/* {taskItem.map(({studentId}, i) => (
            <tbody>
            {
                studentId.map((data1, index) => (  //console.log(data.Description)) )                        
                // <div key={index}>
                  <tr className="text-center">
                    <td>{index + 1}</td>
                    <td>{data1.studentFullName}</td>
                    <td>{data1.email}</td>
                    <td>{data1.phoneNumber}</td>
                  </tr>

                // </div>
                ))
            }   
            </tbody>
          ))} */}
          </table>
        </div>
      )                                                       
}