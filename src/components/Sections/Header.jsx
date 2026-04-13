import React from 'react';
import studentImg from '../../assets/images/student.png';

const ExpenseTrackerHeader = () => {
  return (
    <div className="bg-[#111] w-full min-h-screen flex items-center overflow-hidden">
      <div className="flex items-center w-full">
        <div className="grid items-center w-full grid-cols-1 lg:grid-cols-2">
          
          {/* වම් පැත්ත: Text */}
          <div className="z-10 flex flex-col justify-center px-6 space-y-6 md:px-16 lg:pl-32">
            <h1 className="text-5xl md:text-7xl lg:text-[115px] font-black leading-[0.85] text-[#E5E5D5] tracking-tighter uppercase">
              Do you like to <br />
              <span className="text-white">track your expenses?</span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-gray-400 md:text-2xl">
              Easily manage and visualize your spending habits with our modern tracking system.
            </p>
            <div className="pt-4">
              <button className="bg-[#E5E5D5] text-black px-14 py-5 rounded-full font-black text-xl hover:bg-white transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>

          {/* දකුණු පැත්ත: Image (Screen එකේ අයිනටම යන විදිහට) */}
          <div className="relative flex items-end justify-end w-full h-screen">
            <img 
              src={studentImg}
              alt="Student" 
              className="w-auto h-[80vh] lg:h-full max-h-screen object-contain object-right-bottom z-10"
              style={{ display: 'block' }}
            />
            {/* Glow effect */}
            <div className="absolute top-1/2 right-0 w-full h-full bg-[#E5E5D5]/5 rounded-full blur-[150px] -z-10"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ExpenseTrackerHeader;