import React, { useEffect, useState } from 'react';
import './Home.css';
import HandshakeIcon from '@mui/icons-material/Handshake';
import bdimage from '../../src/asserts/Photos/bgimage.jpg';
import courseModel from '../course';
import Testimonial from '../Components/Testimonial/Testimonial';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import XIcon from '@mui/icons-material/X';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const [filter, setFilter] = useState('');
const navigate=useNavigate();
  const filteredCourses = courseModel.filter(course =>
    course.name.toLowerCase().includes(filter.toLowerCase()) ||
    course.instructor.toLowerCase().includes(filter.toLowerCase())
  );
  useEffect(()=>{

    if(!localStorage.getItem('jwt')){
      navigate('/signin')
    }
  },[])

const handle_get_name=()=>{
  const data=localStorage.getItem("user")
  if(data){
    const name=JSON.parse(data)//this is used for convert string to object
    return name.name
  }
}


  return (
    <div className='flex w-full h-screen bg-sky-900 text-white justify-center overflow-hidden' >
      <div className='absolute top-10 w-full mt-20'>
        <div>
          <div className='p-3'>
            <h1 className='font-bold text-3xl'>Hi {handle_get_name()} <HandshakeIcon className='text-yellow-500' style={{ fontSize: '25px' }} /><span className='text-yellow-500'>’’</span></h1>
          </div>
          <div className='p-3'>
            <h2 className='text-xl text-slate-400'>Welcome TO Course Learning Concepts...</h2>
            <h2 className='text-xl text-slate-400'>And Let’s help you land your dream career...</h2>
          </div>
        </div>
        <div className='pt-4 pb-10'>
          <img src={bdimage} alt="Background" className='w-full h-[600px] shadow-2xl' />
        </div>

        <div className='text-black p-5' style={{ backgroundColor: "#F0FBFF" }}>
          <h1 className='text-4xl font-bold tracking-wide'>Recommended for you</h1>
          <p className='text-xl text-slate-400'>as per your <span className='text-sky-600 font-bold'>preferences</span></p>
          <input
            type="text"
            placeholder="Search courses..."
            value={filter}
            onChange={e => setFilter(e.target.value)}
            className="p-2 m-4"
          />
          <div className='flex overflow-x-scroll space-x-4 p-6' style={{ scrollbarWidth: 'none' }}>
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <Link to={`/course/${course.id}`} key={course.id} className='flex-shrink-0 flex flex-col items-center bg-slate-700 shadow-2xl p-8 w-[400px] min-w-[400px] hover:scale-105 rounded-xl'>
                  <img src={course.thumbnail} alt="Thumbnail" className='w-[400px] h-[300px] rounded-xl' />
                  <h1 className='text-white text-2xl font-bold mt-3 mb-2'>{course.name}</h1>
                  <h2 className='font-bold text-slate-400'>Instructor : <span className='text-sky-300'>{course.instructor}</span></h2>
                  <p className='text-slate-300'>{course.description}</p>
                  <div className='flex justify-between w-full px-2'>
                    <p className='font-bold text-slate-200'>Duration : {course.duration}</p>
                    <p className='font-bold text-slate-200'>Location : <span className='text-green-600'>{course.location}</span></p>
                  </div>
                  <div className='w-[100%] p-4'>
                    <Link to={`/course/${course.id}`}>
                    
                  <button className='font-bold text-white bg-blue-700 w-full p-3 rounded-xl'>Enroll</button>
                    </Link>
                  </div>
                </Link>
              ))
            ) : (<div className='w-full'>

              <p className='text-center font-bold text-xl'>No courses found that match your criteria.</p>
            </div>
            )}
          </div>
          <div className='w-full flex justify-center items-center h-[40%] p-7'>
            <Testimonial />
          </div>
          <hr />
          <div className='w-full p-11 bg-slate-800'>
            <div className='flex items-center justify-around flex-wrap space-x-2'>
              <p className='text-slate-400 text-xl cursor-pointer'>Home</p>
              <p className='text-slate-400 text-xl cursor-pointer'>About</p>
              <p className='text-slate-400 text-xl cursor-pointer'>Course</p>
              <p className='text-slate-400 text-xl cursor-pointer'>Contact</p>
              <p className='text-slate-400 text-xl cursor-pointer'>Privacy</p>
              <p className='text-slate-400 text-xl cursor-pointer'>Terms & Conditions</p>
            </div>
            <div className='flex space-x-2 p-6 text-white ' >
              <InstagramIcon className='cursor-pointer' />
              <FacebookIcon className='cursor-pointer' />
              <LinkedInIcon className='cursor-pointer' />
              <WhatsAppIcon className='cursor-pointer' />
              <XIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
