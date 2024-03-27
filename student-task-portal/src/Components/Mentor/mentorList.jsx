import { useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { mentorContext } from "../../Context/getMentorContext";

export default function MentorList()
{
    const location = useLocation();
    const { fromHome } = location.state;
    let data = fromHome.data;
    //console.log(data)
    const {mentorDetails = []} = useContext(mentorContext);
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
                            <Link to="/mentor_list" state={{ fromHome: { data }}} style={{textDecoration: "none"}}>
                                <a className="nav-link active" href="#">
                                <i className="bi bi-speedometer2"></i>
                                        &nbsp;&nbsp;Mentor List
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/assign_mentor" state={{ fromHome: { data }}} style={{textDecoration: "none"}}>
                                <a className="nav-link" href="#">
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
            <div className="container" style={{
                width: "45rem", 
                borderColor: "#bf80ff", 
                borderRadius: "15px",
                position: "absolute",
                top: "20%",
                left: "50%",
                transform: "translate(-50%, 0%)"
            }}>
            <table className="table table-bordered table-hover" style={{border : "2px solid #66b3ff"}}>
            <thead>
              <tr className="table-danger text-center">
                <th>Sl.No</th>
                <th>Mentor Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th colSpan="4">Course Name</th>
              </tr>
            </thead>
            {mentorDetails.map(({address, mentorName,mentor_email,mentor_phoneNo, studentId}, i) => (
            <tbody>
                  <tr className="text-center">
                    <td>{i + 1}</td>
                    <td>{mentorName}</td>
                    <td>{mentor_email}</td>
                    <td>{mentor_phoneNo}</td>
                    {studentId.length !== 0 ? 
                    studentId.map(({studentFullName,email, phoneNumber, courseName}, index) => ( 
                    <td>{courseName}</td>
                    ))
                    : <td>Course Not Assigned Yet</td>}
                  </tr>           
            </tbody>
            ))}
            </table>
            </div>
        </>
    )
}