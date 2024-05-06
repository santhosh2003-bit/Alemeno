import React, { useState } from 'react'
import courseModel from '../../course';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
const Course = () => {
    const [filter, setFilter] = useState('');

    const filteredCourses = courseModel.filter(course =>
      course.name.toLowerCase().includes(filter.toLowerCase()) ||
      course.instructor.toLowerCase().includes(filter.toLowerCase())
    );
  return (
    <div>
        <div className='p-7'>
            <h1 className='text-4xl font-bold text-sky-700'>Recommended Courses</h1>
            
            <div className='w-full flex justify-center items-center mt-10'>
                <div className=' shadow-2xl border-2 border-slate-500 w-[40%] flex items-center justify-between p-2 rounded-xl '>

                <input type="text" 
               placeholder='Search Course...' 
               value={filter} 
               onChange={(e)=>setFilter(e.target.value)}
               className='border-none outline-none w-full text-2xl'
               />
               <SearchIcon />
                </div>
            </div>
            <hr className='border-2 translate-y-5'/>
            <div className='flex flex-wrap gap-10 justify-center p-8 absolute top-[30%]'>
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <Link to={`/course/${course.id}`} key={course.id} className='flex-shrink-0 flex flex-col items-center bg-slate-700 shadow-2xl p-8 w-[400px] min-w-[400px] hover:scale-105 rounded-xl '>
                  <img src={course.thumbnail} alt="Thumbnail" className='w-[400px] h-[300px] rounded-xl' />
                  <h1 className='text-white text-2xl font-bold mt-3 mb-2'>{course.name}</h1>
                  <h2 className='font-bold text-slate-400'>Instructor : <span className='text-sky-300'>{course.instructor}</span></h2>
                  <p className='text-slate-300 text-justify'>{course.description}</p>
                  <div className='flex justify-between w-full px-2'>
                    <p className='font-bold text-slate-200'>Duration : {course.duration}</p>
                    <p className='font-bold text-slate-200'>Location : <span className='text-green-600'>{course.location}</span></p>
                  </div>
                  <div className='w-[100%] p-4'>
                  <button className='font-bold text-white bg-blue-700 w-full p-3 rounded-xl'>Enroll</button>
                  </div>
                </Link>
              ))
            ) : (<div className=''>

              <p className=' font-bold text-2xl'>No courses found that match your criteria.</p>
            </div>
            )}
            </div>
        </div>
    </div>
  )
}

export default Course
