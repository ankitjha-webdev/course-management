import { Route, Routes } from 'react-router-dom'
import GetCoursesbyRegistrationNo from "./components/course/GetCoursesbyRegistrationNo";
import About from "./components/About"
import Contact from "./components/Contact"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Header from './components/Header';
import OtherLayout from './components/OtherLayout';
import Home from './components/Home';
import StudentLayout from './components/student/StudentLayout';
import StudentList from './components/student/StudentList';
import Student from './components/student/Student';
import AddStudent from './components/student/AddStudent';
import CourseLayout from './components/course/CourseLayout';
import CourseList from './components/course/CourseList';
import Course from './components/course/Course';
import AddCourse from './components/course/AddCourse';
import ListOfCourses from './components/course/ListOfCourses';
import NotFound from './components/NotFound';
import UpdateStudent from './components/student/UpdateStudent';

const App = () => {
  return (
    <div className="">
      {/* <GetCoursesbyRegistrationNo />   */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<OtherLayout />}>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route path="/student" element={<StudentLayout />} >
          <Route index element={<StudentList />} />
          <Route path=":id" element={<Student />} />
          <Route path="addstudent" element={<AddStudent />} />
          <Route path="updatestudent/:id" element={<UpdateStudent />} />
        </Route>

        <Route path="/course" element={<CourseLayout />} >
          <Route index element={<GetCoursesbyRegistrationNo />} />
          <Route path=":id" element={<Course />} />
          <Route path="addcourse" element={<AddCourse />} />
          {/* <Route path="courselist" element={<ListOfCourses />} /> */}
        </Route>  
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
