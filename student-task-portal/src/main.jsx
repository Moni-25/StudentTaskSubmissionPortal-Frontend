import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import CourseContextProvider from './Context/roadmapContext.jsx'
import StudentContextProvider from './Context/getStudentContext.jsx'
import TaskContextProvider from './Context/getTaskDetailsContext.jsx'
import MentorContextProvide from './Context/getMentorContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <StudentContextProvider>
    <CourseContextProvider>
    <TaskContextProvider>
    <MentorContextProvide>
      <App />
    </MentorContextProvide>
    </TaskContextProvider>
    </CourseContextProvider>
    </StudentContextProvider>
  </Router>,
)
