import { createContext, useEffect, useState } from "react";

export const taskContext = createContext({
    taskItem: [],
    updateTask: ()  => {}
});

export default function TaskContextProvider({children})
{
    const [alltask, setAllTask] = useState([]);
    async function getAllTask()
    {
        try{
            const res = await fetch("https://studenttasksubmissionportal-database.onrender.com/api/task");
            const result = await res.json();
            setAllTask(result.data);
        }
        catch(error)
        {
            console.log(error)
        }
    }
    useEffect(() => {
        getAllTask();
        return () => {};
      }, []);

    const TaskContextValue = {
        taskItem: alltask,
        updateTask: setAllTask
    }

    return(
        <taskContext.Provider value={TaskContextValue}>
            {children}
        </taskContext.Provider>
    )
}