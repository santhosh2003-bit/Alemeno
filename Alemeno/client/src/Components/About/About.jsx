import React from 'react';
import './About.css';  // Assuming you have some custom CSS for styling

const About = () => {
  return (
    <div className="about-container">
      <h1 className='text-4xl font-bold border-b-2 border-b-lime-400 pb-5'>About Us</h1>
      <div className='p-6'>
      <p className='text-2xl'>
        Our application, <strong className='text-lime-400'>Learnify</strong>, is dedicated to delivering high-quality, accessible learning experiences to students globally. Founded in 2021, our platform has grown to include courses ranging from technology and science to business and the arts.
      </p>
      <div className="mission-statement">
        <h2 className='text-3xl font-bold'>Our Mission</h2>
        <p className='text-2xl mt-4'>
          We strive to empower individuals to advance their education and career goals by providing comprehensive, flexible, and engaging learning tools and environments.
        </p>
      </div>
      </div>
      <div className="team-info p-6 border-2 w-max rounded-xl">
        <h2 className='text-2xl font-bold'>Meet Our Team</h2>
        <ul>
          <li className='font-bold'><strong className='text-indigo-500'>Alice Johnson</strong> - CEO & Founder</li>
          <li className='font-bold'><strong className='text-purple-600'>Bob Smith</strong> - CTO & Co-Founder</li>
          <li className='font-bold'><strong className='text-teal-500'>Chloe Green</strong> - Lead Developer</li>
          <li className='font-bold'><strong className='text-teal-500'>Derek Lee</strong> - Marketing Director</li>
        </ul>
      </div>
      <div className="achievements">
        <h2 className='text-3xl font-bold mb-3'>Achievements</h2>
        <p className='text-2xl mt-4'>
          Winner of the 2022 EdTech Innovation Award. Featured in major tech magazines for pioneering inclusive education technology.
        </p>
      </div>
    </div>
  );
}

export default About;
