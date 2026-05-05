import React from 'react';
import studentImg from '../../assets/images/student.png';

const ExpenseTrackerHeader = () => {
  return (
    <div className="bg-[#111] w-full h-screen flex items-center overflow-hidden m-0 p-0 border-none">
      <div className="flex items-center w-full h-full">
        <div className="grid items-center w-full h-full grid-cols-1 lg:grid-cols-2">
          
          {/* Left Side: Typography */}
          <div className="z-10 flex flex-col justify-center px-10 space-y-8 md:px-20 lg:pl-32">
            <h1 className="text-6xl md:text-8xl lg:text-[120px] font-black leading-[0.85] text-[#E5E5D5] tracking-tighter uppercase">
              Do you like to <br />
              <span className="text-white">track your expenses?</span>
            </h1>
            <p className="max-w-xl text-xl leading-relaxed text-gray-400 md:text-2xl">
              Easily manage and visualize your spending habits with our modern tracking system.
            </p>
            <div className="pt-4">
              <button className="bg-[#E5E5D5] text-black px-16 py-6 rounded-full font-black text-2xl hover:bg-white transition-all duration-300 shadow-2xl">
                Get Started
              </button>
            </div>
          </div>

          {/* Right Side: Maximum Image Size */}
          <div className="relative flex items-end justify-end w-full h-full overflow-hidden">
            <img 
              src={studentImg}
              alt="Student" 
              className="z-10 object-contain object-right-bottom w-auto h-full pointer-events-none select-none lg:h-screen"
              style={{ 
                marginRight: '-2px', 
                marginBottom: '-2px',
                display: 'block' 
              }}
            />
            {/* Background Glow */}
            <div className="absolute top-1/2 right-0 w-[90%] h-[90%] bg-[#E5E5D5]/5 rounded-full blur-[180px] -z-10"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ExpenseTrackerHeader;