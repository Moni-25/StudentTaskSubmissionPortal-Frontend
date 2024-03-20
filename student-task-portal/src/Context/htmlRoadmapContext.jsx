import { createContext, useState } from "react";
import htmlmap from "../assets/htmlRoadmap.json"

export const htmlcontext = createContext({
    htmlItems : [],
    updateHtml: () => {}
});

export default function HtmlContextProvider({children})
{
    const [htmlmaps, sethtmlRoadmap] = useState(htmlmap);
    const htmlContextValue = {
        htmlItems: htmlmaps,
        updateHtml: sethtmlRoadmap
    }
    return(
        <>
        <htmlcontext.Provider value={htmlContextValue}>
            {children}
        </htmlcontext.Provider>
        </>
    )
}