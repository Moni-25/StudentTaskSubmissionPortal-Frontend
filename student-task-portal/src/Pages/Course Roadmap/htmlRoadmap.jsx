
import { useContext } from "react";
import "./roadmap.css"
import { useLocation, useNavigate } from "react-router-dom"
import { courseContext } from "../../Context/roadmapContext";
import { htmlcontext } from "../../Context/htmlRoadmapContext";

export default function HtmlRoadMap({htmlValue = {}, state = {}})
{
    const location = useLocation();
    const { fromHome } = location.state;
    let data = fromHome.data;
    //console.log("Roadmap", data);
    const navigate = useNavigate();
    const values = data;
    const {courseItems = []} = useContext(courseContext);
    const {htmlItems = []} = useContext(htmlcontext);
    let divide, divide1;
    function handle(e){
        let id = htmlValue.id;
        let btn1 = document.getElementById(id);
        let val = btn1.value;

        // Day 1 Course 
        {val === "1" ? navigate("/htmlday1", {state:{fromHome: { data }}}): "hello"}
        //console.log(val)
        // Day 2 Course 
        {val === "2" ? navigate("/htmlday2", {state:{fromHome: { data }}}): "hello"}
        // Day 3 Course 
        {val === "3" ? navigate("/htmlday3", {state:{fromHome: { data }}}): "hello"}
        // Day 4 Course 
        {val === "4" ? navigate("/htmlday4", {state:{fromHome: { data }}}): "hello"}
        // Day 5 Course 
        {val === "5" ? navigate("/htmlday5", {state:{fromHome: { data }}}): "hello"} 
        // Day 5 Course 
        {val === "6" ? navigate("/day6", {state:{fromHome: { data }}}): "hello"}  
        // Day 5 Course 
        {val === "7" ? navigate("/day7", {state:{fromHome: { data }}}): "hello"}  
        // Day 5 Course 
        {val === "8" ? navigate("/day8", {state:{fromHome: { data }}}): "hello"}  
        // Day 5 Course 
        {val === "9" ? navigate("/day9", {state:{fromHome: { data }}}): "hello"}   
    }
   
    //console.log(courseItems.data.length, "hi")
    return (
        <>
            <button type="button" value={htmlValue.id} id={htmlValue.id} className="btn btn-outline-primary btn-circle btn-xl"
                   onClick={handle} >
                    {htmlValue.id}
            </button>
            {/* <i class="bi bi-dash-lg ms-1" style={{fontSize: "32px"}}></i> */}
            
                {
                    htmlValue.id % 4 === 0 || htmlValue.id === htmlItems.htmldata.length 
                    ? 
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    :
                    <i className="bi bi-arrow-right ms-1" style={{fontSize: "32px"}}></i> 
                }
                                       
        </>
    )
}