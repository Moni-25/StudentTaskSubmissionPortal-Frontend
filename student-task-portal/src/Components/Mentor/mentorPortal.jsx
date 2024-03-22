import { useCallback, useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { mentorContext } from "../../Context/getMentorContext";

export default function MentorPortal()
{
    const location = useLocation();
    const { fromHome } = location.state;
    let data = fromHome.data;
    console.log(data)
    const {mentorDetails=[]} = useContext(mentorContext)
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
                            <Link to="/mentor_profile" state={{ fromHome: { data }}} style={{textDecoration: "none"}}>
                                <a className="nav-link active" href="#">
                                <i class="bi bi-person-circle"></i>
                                        &nbsp;&nbsp;Profile
                                </a>
                            </Link>
                        </li>   
                        <li className="nav-item">
                        <Link to="/stu_list" state={{ fromHome: { data }}} style={{textDecoration: "none"}}>
                            <a className="nav-link" aria-current="page" href="#">
                            <i class="bi bi-list-task"></i>
                                    &nbsp;&nbsp;Student List
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
            <div className="card-header mt-3 text-center" style={{backgroundColor: "#ff8080", width:"45rem", 
                    fontSize:"20px", 
                    fontWeight: "700",
                    height:"50px",
                    border: "2px solid #bf80ff", 
                    borderRadius: "15px",
                    position: "absolute",
                    top: "15%",
                    left: "50%",
                    transform: "translate(-50%, 0%)"}}>
                    <p>Profile</p>
                </div>
            <div className="container" style={{
                width: "45rem", 
                border: "2px solid #bf80ff", 
                borderRadius: "15px",
                position: "absolute",
                top: "28%",
                left: "50%",
                transform: "translate(-50%, 0%)"
            }}>
                {/* <div className="card-header mt-3 text-center" style={{backgroundColor: "#ff8080", width:"40%", 
                    fontSize:"18px", 
                    fontWeight: "700",
                    height:"45px",
                    marginLeft:"30%",
                    borderRadius:"12px"}}>
                    Profile
                </div> */}
                {mentorDetails.map(({mentorName, mentor_username, mentor_email, mentor_phoneNo, address}, i) => (data === mentorName ?
                    <div className="card-body">
                        <div className="row-lg-12 ms-1 d-flex">
                            <div className="col-lg-3">
                                <label htmlFor="" className="form-label" style={{fontSize:"16px"}}>
                                    Name 
                                </label>
                            </div>
                            <div className="col-lg-1">
                                <span style={{fontWeight:"700"}}>:</span>
                            </div>
                            <div className="col-lg-6">
                                <label htmlFor="" className="form-label" style={{fontSize:"16px", fontWeight: "700"}}>
                                    {mentorName}
                                </label>
                            </div>
                        </div>

                        <div className="row-lg-12 ms-1 d-flex">
                            <div className="col-lg-3">
                                <label htmlFor="" className="form-label" style={{fontSize:"16px"}}>
                                    Username 
                                </label>
                            </div>
                            <div className="col-lg-1">
                                <span style={{fontWeight:"700"}}>:</span>
                            </div>
                            <div className="col-lg-6">
                                <label htmlFor="" className="form-label" style={{fontSize:"16px", fontWeight: "700"}}>
                                    {mentor_username}
                                </label>
                            </div>
                        </div>

                        <div className="row-lg-12 ms-1 d-flex">
                            <div className="col-lg-3">
                                <label htmlFor="" className="form-label" style={{fontSize:"16px"}}>
                                    Email 
                                </label>
                            </div>
                            <div className="col-lg-1">
                                <span style={{fontWeight:"700"}}>:</span>
                            </div>
                            <div className="col-lg-6">
                                <label htmlFor="" className="form-label" style={{fontSize:"16px", fontWeight: "700"}}>
                                    {mentor_email}
                                </label>
                            </div>
                        </div>

                        <div className="row-lg-12 ms-1 d-flex">
                            <div className="col-lg-3">
                                <label htmlFor="" className="form-label" style={{fontSize:"16px"}}>
                                    Phone Number
                                </label>
                            </div>
                            <div className="col-lg-1">
                                <span style={{fontWeight:"700"}}>:</span>
                            </div>
                            <div className="col-lg-6">
                                <label htmlFor="" className="form-label" style={{fontSize:"16px", fontWeight: "700"}}>
                                    {mentor_phoneNo}
                                </label>
                            </div>
                        </div>

                        <div className="row-lg-12 ms-1 d-flex">
                            <div className="col-lg-3">
                                <label htmlFor="" className="form-label" style={{fontSize:"16px"}}>
                                    Address 
                                </label>
                            </div>
                            <div className="col-lg-1">
                                <span style={{fontWeight:"700"}}>:</span>
                            </div>
                            <div className="col-lg-6">
                                <label htmlFor="" className="form-label" style={{fontSize:"16px", fontWeight: "700"}}>
                                    {address}
                                </label>
                            </div>
                        </div>
                    </div>
                : ""))}
            </div>
        </>
    )
}