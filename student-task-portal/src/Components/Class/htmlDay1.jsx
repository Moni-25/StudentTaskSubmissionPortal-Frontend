import CourseMap from "../../Pages/Course Roadmap/courseMap";
import {Link, useLocation} from "react-router-dom";
import HtmlTaskOne from "../Task/htmlTask1";

export default function HtmlClassOne()
{
    const location = useLocation();
    const { fromHome } = location.state;
    let data = fromHome.data;
    let name = "HTML- Day-1: HTML";
    console.log("Html-Day1",data,name);
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
                        <Link to="/class" state={{ fromHome: { data }}} style={{textDecoration: "none"}}>
                            <a className="nav-link active" aria-current="page" href="#" style={{fontWeight: "bolder"}}>
                                <i className="bi bi-speedometer2"></i>
                                    &nbsp;&nbsp;Class
                            </a>
                        </Link>
                        </li>      
                        <li className="nav-item">
                        <Link to="/task_submit" state={{ fromHome: { data }}} style={{textDecoration: "none"}}>
                            <a className="nav-link" href="#">
                                <i className="bi bi-list-task"></i>
                                    &nbsp;&nbsp;Tasks
                            </a>
                        </Link>    
                        </li>
                    </ul>
                    <a className="navbar-brand" href="#">{data}</a>
                    </div>
                </div>
            </nav>

            <div className="row-lg-12 d-flex">
                <div className="col-lg-4 mt-5">
                    <CourseMap state={{ fromHome: { data }}}/>
                </div>

                <div className="col-lg-8">
                    <div className="container">
                        <div className="card ms-4 mt-5" style={{width: "50rem", padding: "0px", border: "2px solid #bfbfbf"}}>
                            <div className="card-header mt-2">
                                <h5 id="taskName" style={{fontWeight: "600", color: "#3333ff"}}>
                                HTML- Day -1: HTML
                                </h5>
                            </div>
                            <div className="card-body">
                                <h6 style={{fontWeight: "550"}}>Contents:</h6>
                                <div className="ms-4">
                                <span className="preread">
                                What is HTML & Why use it?<br></br>
                                Basic Tags<br></br>
                                HTML vs HTML5<br></br>
                                div vs section vs article<br></br>
                                div vs span<br></br>
                                inline vs block elements<br></br>
                                HTML Forms<br></br>
                                Input elements and attributes<br></br>
                                Form submit<br></br>
                                </span>
                                </div>
                                <div className="mt-2 mb-1" style={{fontWeight: "550"}}>Pre-Read:</div>
                                <div className="ms-4">
                                    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML
https://html.spec.whatwg.org/multipage/" target="_blank" style={{fontFamily: "sans-serif", fontSize: "16px"}}>
                                    https://developer.mozilla.org/en-US/docs/Web/HTML
https://html.spec.whatwg.org/multipage/
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="row-lg-12">
                <div className="col-lg-8 ms-4 mt-3">
                    <div className="container">
                        <h5 style={{fontWeight: "600", color: "#3333ff"}}>Task Submission</h5>
                    </div>
                </div>
            </div> */}
            
            <div className="row-lg-12 d-flex">
                
            <div className="col-lg-4 mt-5">

                </div>
                <div className="col-lg-8">
                    <div className="container">
                    <h5 style={{fontWeight: "600", color: "#3333ff"}} className="ms-4 mt-3">Task Submission</h5>
                    <HtmlTaskOne state={{ fromHome: { data }}} val={name}/>
                    </div>
                </div>
            </div>

            <div className="col-lg-12 mb-5"></div>
        </>
    )
}