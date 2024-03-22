import { createContext, useEffect, useState } from "react";

export const mentorContext = createContext({
    mentorDetails: [],
    updateMentor: () => {}
});

export default function MentorContextProvide({children})
{
    const [mentor, setMentor] = useState([]);
    async function getMentorData()
    {
        try{
            const res = await fetch("https://studenttasksubmissionportal-database.onrender.com/api/mentor");
            const result = await res.json();
            setMentor(result.data);
        }
        catch(error)
        {
            console.log(error)
        }
    }
    useEffect(() => {
        getMentorData();
        return () => {};
      }, []);

    const mentorContextValue = {
        mentorDetails: mentor,
        updateMentor: setMentor
    }

    return(
        <mentorContext.Provider value={mentorContextValue}>
            {children}
        </mentorContext.Provider>
    )
}