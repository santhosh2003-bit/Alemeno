import React from 'react';
import PortraitIcon from '@mui/icons-material/Portrait';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import SettingsIcon from '@mui/icons-material/Settings';

const Contact = () => {
    return (
        <div className='w-full flex justify-center px-4 md:px-20 py-10'>
            <div className='w-full max-w-4xl'>
                <div className='mb-6 text-center'>
                    <h1 className='text-3xl font-bold pb-3'>Hi Boda</h1>
                    <h2 className='text-2xl text-slate-400'>What can we help you with?</h2>
                </div>
                <div className=' flex flex-col md:flex-row md:flex-wrap justify-center gap-4'>
                    <div className='flex-1 min-w-[300px] max-w-md p-6 border-2 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 shadow-2xl rounded-xl'>
                        <PortraitIcon className='text-4xl'/>
                        <h2 className='text-2xl font-bold'>Account / Profile</h2>
                        <p className='text-slate-400'>Manage Your Course Account for Security and Protect</p>
                    </div>
                    <div className='flex-1 min-w-[300px] max-w-md p-6 border-2 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 shadow-2xl rounded-xl'>
                        <ReportProblemIcon className='text-4xl'/>
                        <h2 className='text-2xl font-bold'>Facing an issue</h2>
                        <p className='text-slate-400'>Report any complaint you may have against a Course</p>
                    </div>
                    <div className='flex-1 min-w-[300px] max-w-md p-6 border-2 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 shadow-2xl rounded-xl'>
                        <SettingsIcon className='text-4xl'/>
                        <h2 className='text-2xl font-bold'>Technical Issues</h2>
                        <p className='text-slate-400'>Report any technical difficulty you are facing here</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
