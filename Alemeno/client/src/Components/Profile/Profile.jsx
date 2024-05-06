import React, { useEffect, useState } from 'react';
import courseModel from '../../course';
import { Link } from 'react-router-dom';

const Profile = () => {
    const [userCourses, setUserCourses] = useState([]);
    const userData = localStorage.getItem("user");
    // console.log(userData)
    const userId = userData ? JSON.parse(userData)._id : null;
    const userName = userData ? JSON.parse(userData).name : "Random Name";
    console.log(userId)
    useEffect(() => {
        if (userId) {
            fetch(`http://localhost:5000/user/${userId}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            })
            .then(response => response.json()) // parse JSON response correctly
            .then(data => {
              console.log(data)
                if (data.courses) { // Check if courses are actually returned
                    const enrolledCourseIds = data.courses;
                    const enrolledCourses = courseModel.filter(course =>
                        enrolledCourseIds.includes(course.id.toString())
                    );
                   
                    setUserCourses(enrolledCourses);
                }
            })
            .catch(error => {
                console.error("Failed to fetch user courses:", error);
                // Optionally update the UI to show an error message
            });
        }
    }, [userId]);

    return (
        <div className='w-full h-screen'>
            <div className='flex justify-center p-8'>
                <div className='flex items-center justify-around p-9 w-[50%] rounded-xl shadow-2xl'>
                    {/* Assuming you might display user data here */}
                    <img src="https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg" alt="profilephoto" className='w-[100px] h-[100px] rounded-full' />
            <h1 className='text-2xl font-bold text-cyan-900 tracking-wide'>{userName}</h1>
                </div>
            </div>
            <hr className='border' />
            <div className='flex flex-wrap gap-7 items-center p-9'>
                {userCourses.map(course => (
                    <div key={course.id} className='flex-shrink-0 flex flex-col items-center bg-slate-700 shadow-2xl p-8 w-[400px] min-w-[400px] hover:scale-105 rounded-xl'>
                        <img src={course.thumbnail} alt="Thumbnail" className='w-[400px] h-[300px] rounded-xl' />
                        <h1 className='text-white text-2xl font-bold mt-3 mb-2'>{course.name}</h1>
                        <h2 className='font-bold text-slate-400'>Instructor: <span className='text-sky-300'>{course.instructor}</span></h2>
                        <p className='text-slate-300'>{course.description}</p>
                        <div className='flex justify-between w-full px-2'>
                            <p className='font-bold text-slate-200'>Duration: {course.duration}</p>
                            <p className='font-bold text-slate-200'>Location: <span className='text-green-600'>{course.location}</span></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Profile;
