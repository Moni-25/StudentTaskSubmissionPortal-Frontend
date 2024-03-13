import { createContext, useEffect, useState } from "react";

export const studentContext = createContext({
    studentDetails: [],
    updateStudentDetails: () => {}
});

export default function StudentContextProvider({children})
{
    const [studentLogin, setStudentLogin] = useState([]);
    async function getStudentData()
    {
        try{
            const res = await fetch("http://localhost:5000/api/auth");
            const result = await res.json();
            setStudentLogin(result.data);
        }
        catch(error)
        {
            console.log(error)
        }
    }
    useEffect(() => {
        getStudentData();
        return () => {};
      }, []);

      const studentContextValue = {
            studentDetails: studentLogin,
            updateStudentDetails: setStudentLogin
      }

      return(
        <studentContext.Provider value={studentContextValue}>
            {children}
        </studentContext.Provider>
      )
}