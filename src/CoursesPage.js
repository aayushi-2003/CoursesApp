import React from 'react';
import Navbar from './Navbar';

const CoursesPage = () => {
  return (
    <div>
    <Navbar />
    <div className='relative h-[100vh]'>
      <div className="bg-primary-blue h-[100vh] w-full z-[-10] px-[10px] md:px-[100px] xl:px-[150px] flex items-center justify-center text-white">
          <h2 className="text-2xl font-bold ">Welcome to your Profile</h2>
      </div>
    </div>
    </div>
  );
};

export default CoursesPage;
