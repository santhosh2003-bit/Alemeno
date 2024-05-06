import React, { useState } from 'react'
import courseModel from '../../course'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
const CourseDetail = () => {
  const { id } = useParams();
  const [showsyll, setShowsyll] = useState(false)
  const navigate = useNavigate()
  const userData = localStorage.getItem("user")
  const userId = userData ? JSON.parse(userData)._id : null;
  const findCourse = courseModel.find((course) => course.id === parseInt(id, 10));

  const handle_To_Enroll = (courseId) => {
    if (!userId) {
      toast.error("You must be logged in to enroll in courses.");
      navigate('/signin');
      return;
    }
    fetch("http://localhost:5000/enroll", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId,
        courseId
      })
    }).then((res) => res.json())
      .then((result) => {
        if (result.error) {
          toast.error(result.error);
        } else {
          toast.success(result.message);
        }
      })
      .catch((error) => {
        console.error('Error during enrollment:', error);
        toast.error("Failed to enroll in course.");
      });
  };


  return (
    <div className='w-full flex justify-center p-6'>
      <div className='w-[80%]'>
        <div className='flex-shrink-0 flex flex-col items-center bg-slate-700 shadow-2xl p-8 w-full   rounded-xl'>
          <img src={findCourse.thumbnail} alt="Thumbnail" className=' rounded-xl' />
          <div className='flex flex-col justify-start w-full'>

            <h1 className='text-white text-start text-2xl font-bold mt-3 mb-2'>{findCourse.name}</h1>
            <h2 className=' text-start font-bold text-slate-400'>Instructor : <span className='text-sky-300'>{findCourse.instructor}</span></h2>
            <p className='text-start text-slate-300'>{findCourse.description}</p>
            <div className='text-start w-full '>
              <p className=' font-bold text-slate-200'>Duration : {findCourse.duration}</p>
              <p className='font-bold text-slate-200'>Location : <span className='text-green-600'>{findCourse.location}</span></p>
            </div>
            <div className='w-max '>
              <button className='font-bold text-white bg-blue-700 w-full p-3 rounded-xl' onClick={() => handle_To_Enroll(findCourse.id)}>Enroll</button>
            </div>
            <div className='w-full'>
              <h1 className='text-white font-bold text-start'>Shedule : <span className='text-lime-400'>{findCourse.schedule}</span></h1>
            </div>
            <div className='w-full'>
              <h1 className='text-start text-white font-bold text-2xl'>Prerequirements</h1>
              <div className='bg-lime-500 p-2 rounded-xl'>

                {
                  findCourse.prerequisites.map((req, index) => {
                    return (
                      <ul className='text-start  ' key={index}>
                        <li className='text-white text-xl'>--{req}</li>
                      </ul>
                    )
                  })
                }
              </div>

            </div>
            {/* syllabus */}
            <div className='w-full'>
              <div className='hover:cursor-pointer '>
                {
                  findCourse.syllabus.map((syll, index) => {
                    return (
                      <div key={index} className='shadow-2xl bg-slate-500 mt-3 p-2 text-xl rounded-xl'>
                        <div className='font-bold' onClick={() => setShowsyll(!showsyll)}>{syll.week} . {syll.topic}
                          {
                            showsyll && <p className='font-normal text-white'>{syll.content}</p>
                          }
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            {/* students */}
            <div>
              <h1 className='font-bold text-2xl text-white text-start'>Students</h1>
              <div>
                {
                  findCourse.students.map((student, index) => {
                    return (
                      <div className='flex justify-around bg-gray-800 text-white mt-2 p-3 font-bold rounded-xl' key={index}>
                        <p>{student.id}</p>
                        <h1>{student.name}</h1>
                        <p>{student.email}</p>
                      </div>
                    )
                  })
                }
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetail