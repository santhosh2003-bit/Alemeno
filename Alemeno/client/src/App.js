
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home/Home';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import Course from './Components/Course/Course';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Profile from './Components/Profile/Profile';
import Navbar from './Components/Navbar/Navbar';
import CourseDetail from './Components/CourseDetails/CourseDetail';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
        <Route path='signup' element={<SignUp/>}></Route>
        <Route path='/course' element={<Course/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/course/:id' element={<CourseDetail/>}></Route>
        
      </Routes>
      <ToastContainer theme='dark' />
      </BrowserRouter>
    </div>
  );
}

export default App;
