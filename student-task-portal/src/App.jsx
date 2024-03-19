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
import Admin from './Pages/Admin/admin'
import AdminPortal from './Components/Admin/adminPortal'
import AssignMentor from './Components/Admin/assignMentor'
import MentorLogin from './Pages/Mentor/mentorLogin'
import MentorPortal from './Components/Mentor/mentorPortal'
import StuList from './Components/Mentor/stuList'
import StudentTaskDetails from './Components/Mentor/studentTask'
import ClassTwo from './Components/Class/day2'


function App() {

  return (
    <>
      <Routes>
        <Route Component={Welcome} path='/'/>  
        <Route Component={Admin} path='/admin'/>
        <Route Component={AdminPortal} path='/admin_portal'/> 
        <Route Component={AssignMentor} path='/assign_mentor'/> 
        <Route Component={LoginForm} path='/login'/>
        <Route Component={Stu} path='/stu'/>
        <Route Component={CourseMap} path='/course_map'/>
        <Route Component={Student} path='/student'/>
        <Route Component={StudentPortal} path='/student_portal'/>
        <Route Component={StudentTaskDetails} path='/student_task'/>
        <Route Component={SignUp} path='/sign_up'/>
        <Route Component={Mentor} path='/mentor'/>
        <Route Component={MentorLogin} path='/mentor_login'/>
        <Route Component={MentorPortal} path='/mentor_portal'/>
        <Route Component={StuList} path='/stu_list'/>
        <Route Component={Dashboard} path='/dashboard'/>
        <Route Component={ClassDetails} path='/class'/>
        <Route Component={ClassBody} path='/class_body'/>
        <Route Component={ClassOne} path='/day1'/>
        <Route Component={ClassTwo} path='/day2'/>
        <Route Component={TaskSubmit} path='task_submit'/>
      </Routes>
    </>
  )
}

export default App
