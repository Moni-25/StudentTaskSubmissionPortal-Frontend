import { useContext } from "react"
import { courseContext } from "../../Context/roadmapContext"
import RoadMap from "./roadmap";
import { useLocation } from "react-router-dom";

export default function CourseMap({state = {}})
{
    const location = useLocation();
    const { fromHome } = location.state;
    let data = fromHome.data;
    console.log("Coursemap", data);
    const {courseItems = []} = useContext(courseContext);
    console.log("Course", courseItems)
    return(
        <>
            <div className="container">
                <div className="card ms-2 pt-0" style={{width: "24rem", border: "2px solid #bfbfbf"}}>
                    <div className="card-header mt-2">
                        <h5 style={{fontWeight: "600", color: "#3333ff"}}>Course Roadmap</h5>
                    </div>
                    <div className="card-body ms-4 d-flex" style={{flexWrap: "wrap"}} >
                        {courseItems.data.map((val, index) => 
                            <RoadMap key={`${index}`} courseDayValue = {val} state={{ fromHome: { data }}}/>)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}