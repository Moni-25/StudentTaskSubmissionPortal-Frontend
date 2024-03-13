import CourseMap from "../../Pages/Course Roadmap/courseMap";

export default function ClassBody()
{
    return(
        <>
            <div className="row-lg-12 d-flex">
                <div className="col-lg-8">
                    <h1></h1>
                </div>
                <div className="col-lg-4 mt-5">
                    <CourseMap/>
                </div>
            </div>
        </>
    )
}