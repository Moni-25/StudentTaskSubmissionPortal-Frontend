import { Link } from "react-router-dom"
import "./welcome.css"
import welcomeLogo from "../../assets/Student.jpg"
import studentLogo from "../../assets/Student Logo.jpg"
import mentorLogo from "../../assets/Mentor Logo.png"

export default function Welcome()
{
    return (
        <>
            <div className="container-fluid welcome">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="card mx-auto" style={{width: "40%"}}>                        
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item" style={{borderBottom: "2px solid rgb(26, 7, 133)"}}>
                                <img src={studentLogo} alt="student" height={"15%"} width={"15%"}/>
                                <Link to="/stu" style={
                                    {
                                        color: "black",
                                        textDecoration: "none", 
                                        marginLeft: "20px", 
                                        fontSize: "19px",
                                        fontWeight: "500"
                                    }
                                }>
                                    Student
                                </Link>
                            </li>
                            <li className="list-group-item">    
                                <img src={mentorLogo} alt="mentor" height={"15%"} width={"15%"}/>
                                    <Link to="/mentor" style={
                                        {
                                            color: "black",
                                            textDecoration: "none", 
                                            marginLeft: "20px", 
                                            fontSize: "19px",
                                            fontWeight: "500"
                                        }
                                    }>
                                        Mentor
                                    </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 d-none d-sm-block image">
                    <img src={welcomeLogo} alt="Hai" height={"100%"} width={"100%"}/>
                </div>
            </div>
        </>
    )
}
