import { useContext } from "react";
import "./roadmap.css"
import { useLocation, useNavigate } from "react-router-dom"
import { courseContext } from "../../Context/roadmapContext";

export default function RoadMap({courseDayValue = {}, state = {}})
{
    const location = useLocation();
    const { fromHome } = location.state;
    let data = fromHome.data;
    console.log("Roadmap", data);
    const navigate = useNavigate();
    const values = data;
    const {courseItems = []} = useContext(courseContext);
    let divide, divide1;
    function handle(e){
        let id = courseDayValue.id;
        let btn1 = document.getElementById(id);
        let val = btn1.value;

        // Day 1 Course 
        {val === "1" ? navigate("/day1", {state:{fromHome: { data }}}): "hello"}
        console.log(val)
        // Day 2 Course 
        {val === "2" ? navigate("/student"): "hello"}
        // Day 3 Course 
        {val === "3" ? navigate("/student"): "hello"}
        // Day 4 Course 
        {val === "4" ? navigate("/student"): "hello"}
        // Day 5 Course 
        {val === "5" ? navigate("/student"): "hello"}  
    }
   
    console.log(courseItems.data.length, "hi")
    return (
        <>
            <button type="button" value={courseDayValue.id} id={courseDayValue.id} className="btn btn-outline-primary btn-circle btn-xl"
                   onClick={handle} >
                    {courseDayValue.id}
            </button>
            {/* <i class="bi bi-dash-lg ms-1" style={{fontSize: "32px"}}></i> */}
            
                {
                    courseDayValue.id % 4 === 0 || courseDayValue.id === courseItems.data.length 
                    ? 
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    :
                    <i className="bi bi-arrow-right ms-1" style={{fontSize: "32px"}}></i> 
                }
                                       
        </>
    )
}