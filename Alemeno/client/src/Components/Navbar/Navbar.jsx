import React from 'react';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between w-full px-5 py-3 shadow-2xl bg-blue-900 text-white'>
      <Link to="/" className='flex items-center space-x-4 hover:cursor-pointer'>
        <LocalLibraryIcon fontSize="large" />
        <h1 className='text-xl font-bold'>Course</h1>
      </Link>
      <div className='flex items-center md:space-x-4 sm:space-x-4  lg:space-x-32'>
        <Link to="/course">
          <p className='cursor-pointer hover:text-blue-300 transition-colors text-xl'>Course</p>
        </Link>
        <Link to="/">
          <p className='cursor-pointer hover:text-blue-300 transition-colors text-xl'>Home</p>

        </Link>
        <Link to="/about">

          <p className='cursor-pointer hover:text-blue-300 transition-colors text-xl'>About</p>
        </Link>
        <Link to="/contact">

          <p className='cursor-pointer hover:text-blue-300 transition-colors text-xl'>Contact</p>
        </Link>
        <Link to="/profile">

          <PersonPinIcon fontSize="large" className='cursor-pointer hover:text-blue-300 transition-colors text-xl' />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
