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
import ClassThree from './Components/Class/day3'
import ClassFour from './Components/Class/day4'
import ClassFive from './Components/Class/day5'
import ClassSix from './Components/Class/day6'
import ClassSeven from './Components/Class/day7'
import HtmlClassOne from './Components/Class/htmlDay1'
import HtmlClassTwo from './Components/Class/htmlDay2'
import HtmlClassThree from './Components/Class/htmlDay3'
import HtmlClassFour from './Components/Class/htmlDay4'
import HtmlClassFive from './Components/Class/htmlDay5'
import Mark from './Components/Mentor/mark'
import MentorList from './Components/Mentor/mentorList'
import MentotProfile from './Components/Mentor/mentorProfile'


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
        <Route Component={MentorList} path='/mentor_list'/>
        <Route Component={MentotProfile} path='/mentor_profile'/>
        <Route Component={StuList} path='/stu_list'/>
        <Route Component={Dashboard} path='/dashboard'/>
        <Route Component={ClassDetails} path='/class'/>
        <Route Component={ClassBody} path='/class_body'/>
        <Route Component={ClassOne} path='/day1'/>
        <Route Component={ClassTwo} path='/day2'/>
        <Route Component={ClassThree} path='/day3'/>
        <Route Component={ClassFour} path='/day4'/>
        <Route Component={ClassFive} path='/day5'/>
        <Route Component={ClassSix} path='/day6'/>
        <Route Component={ClassSeven} path='/day7'/>
        <Route Component={HtmlClassOne} path='/htmlday1'/>
        <Route Component={HtmlClassTwo} path='/htmlday2'/>
        <Route Component={HtmlClassThree} path='/htmlday3'/>
        <Route Component={HtmlClassFour} path='/htmlday4'/>
        <Route Component={HtmlClassFive} path='/htmlday5'/>
        <Route Component={Mark} path='/mark'/>
        <Route Component={TaskSubmit} path='task_submit'/>
      </Routes>
    </>
  )
}

export default App
