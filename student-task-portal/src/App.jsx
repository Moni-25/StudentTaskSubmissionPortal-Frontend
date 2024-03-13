import { Route, Routes } from 'react-router-dom'
import './App.css'
import Welcome from './Pages/Welcome/welcome'
import Student from './Components/Student/student'
import Mentor from './Components/Mentor/mentor'
import Dashboard from './Components/Dashboard/dashboard'
import StudentPortal from './Components/Student/studentPortal'
import ClassOne from './Components/Class/day1'
import ClassDetails from './Pages/Class/class'
import SignUp from './Components/Student/signup'
import ClassBody from './Components/Class/classBody'
import CourseMap from './Pages/Course Roadmap/courseMap'
import TaskSubmit from './Components/Task/taskSubmit'
import LoginForm from './Components/Student/login'
import Stu from './Components/Student/stu'

function App() {

  return (
    <>
      <Routes>
        <Route Component={Welcome} path='/'/>    
        <Route Component={LoginForm} path='/login'/>
        <Route Component={Stu} path='/stu'/>
        <Route Component={CourseMap} path='/course_map'/>
        <Route Component={Student} path='/student'/>
        <Route Component={StudentPortal} path='/student_portal'/>
        <Route Component={SignUp} path='/sign_up'/>
        <Route Component={Mentor} path='/mentor'/>
        <Route Component={Dashboard} path='/dashboard'/>
        <Route Component={ClassDetails} path='/class'/>
        <Route Component={ClassBody} path='/class_body'/>
        <Route Component={ClassOne} path='/day1'/>
        <Route Component={TaskSubmit} path='task_submit'/>
      </Routes>
    </>
  )
}

export default App
