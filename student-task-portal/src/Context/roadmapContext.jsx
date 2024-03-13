import { createContext, useState } from "react";
import roadmap from "../assets/roadmap.json"

export const courseContext = createContext({
    courseItems : [],
    updateCourse: () => {}
});

export default function CourseContextProvider({children})
{
    const [roadmaps, setRoadmap] = useState(roadmap);
    const courseContextValue = {
        courseItems: roadmaps,
        updateCourse: setRoadmap
    }
    return(
        <>
        <courseContext.Provider value={courseContextValue}>
            {children}
        </courseContext.Provider>
        </>
    )
}