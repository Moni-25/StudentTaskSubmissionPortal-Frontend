import { useContext } from "react"
import { courseContext } from "../../Context/roadmapContext"
import RoadMap from "./roadmap";
import { useLocation } from "react-router-dom";
import { studentContext } from "../../Context/getStudentContext";
import { htmlcontext } from "../../Context/htmlRoadmapContext";
import HtmlRoadMap from "./htmlRoadmap";

export default function CourseMap({state = {}})
{
    const location = useLocation();
    const { fromHome } = location.state;
    let data = fromHome.data;
    console.log("Coursemap", data);
    const {courseItems = []} = useContext(courseContext);
    const {htmlItems = []} = useContext(htmlcontext);
    const {studentDetails = []} = useContext(studentContext);
    console.log("Course", courseItems)
    let java ="", stack ="";
    let course="";
    {studentDetails.map(t => {
        console.log(t.stu_username, data)
        if(data === t.stu_username)
        {
            course = t.courseName;
            console.log(data, course)
        }
    })}
    return(
        <>
            <div className="container">
                <div className="card ms-2 pt-0" style={{width: "24rem", border: "2px solid #bfbfbf"}}>
                    <div className="card-header mt-2">
                        <h5 style={{fontWeight: "600", color: "#3333ff"}}>Course Roadmap</h5>
                    </div>
                    {course === "Javascript" &&
                    <div className="card-body ms-4 d-flex" style={{flexWrap: "wrap"}} >
                        {courseItems.data.map((val, index) => 
                            <RoadMap key={`${index}`} courseDayValue = {val} state={{ fromHome: { data }}}/>)
                        }
                    </div>}
                    {course === "Html & CSS" &&
                    <div className="card-body ms-4 d-flex" style={{flexWrap: "wrap"}} >
                        {htmlItems.htmldata.map((html, i) =>
                            <HtmlRoadMap key={`${i}`} htmlValue ={html} state={{fromHome: {data}}}/>)}
                    </div>
                    }
                </div>
            </div>
        </>
    )
}