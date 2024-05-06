import React, { useEffect, useState } from 'react'
import review from '../../review'
const Testimonial = () => {
    const [index,setIndex]=useState(0);
    useEffect(()=>{
        const intervalId=setInterval(()=>{
            setIndex((prevIndex)=>(prevIndex+1)%review.length);
        },3000);
        return ()=>clearInterval(intervalId);
    },[])
  return (
    <div className='w-[850px] h-full'>
        <div key={review[index].id} className='flex flex-col animate-fadeInout p-5 shadow-2xl'>
            <div className='flex items-center space-x-5 justify-center'>
                <img src={review[index].image} alt="studentimage" className='w-[100px] h-[100px] rounded-full'/>
                <h1 className='font-bold text-4xl'>{review[index].studentName}</h1>
            </div>
            <div className='flex justify-between pt-5'>
                <h1 className='font-bold text-3xl'>{review[index].courseName}</h1>
                <h2 className='font-bold text-xl'>Rating : {review[index].rating}</h2>
            </div>
            <p className='text-slate-500 text-2xl text-justify'>{review[index].testimonial}</p>
        </div>
    </div>
  )
}

export default Testimonial