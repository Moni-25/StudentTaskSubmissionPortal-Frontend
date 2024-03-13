import { Link, useLocation } from "react-router-dom";

export default function Dashboard()
{
    const location = useLocation();
    const { fromHome } = location.state;
    let data = fromHome.data;
    console.log(data)
    return (
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
                            <a className="nav-link" href="#">
                            <i className="bi bi-speedometer2"></i>
                                    &nbsp;&nbsp;Class
                            </a>
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/dashboard" state={{ fromHome: { data }}} style={{textDecoration: "none"}}>
                            <a className="nav-link active" aria-current="page" href="#" style={{fontWeight: "bolder"}}>
                            <i className="bi bi-person-video"></i>
                                    &nbsp;&nbsp;Dashboard
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
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="bi bi-patch-question-fill"></i>
                                    &nbsp;&nbsp;Queries
                            </a>
                        </li>
                    </ul>
                    <a className="navbar-brand" href="#">{data}</a>
                </div>
            </div>
        </nav>
        </>
    )
}