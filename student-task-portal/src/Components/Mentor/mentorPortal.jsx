import { useLocation, Link } from "react-router-dom";

export default function MentorPortal()
{
    const location = useLocation();
    const { fromHome } = location.state;
    let data = fromHome.data;
    console.log(data)
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
                            <Link to="/assign_mentor" state={{ fromHome: { data }}} style={{textDecoration: "none"}}>
                                <a className="nav-link" href="#">
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
                    <span className="navbar-brand" href="#">{data}</span>
                </div>
                </div>
            </nav>
        </>
    )
}