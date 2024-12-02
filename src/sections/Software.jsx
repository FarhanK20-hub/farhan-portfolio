import React, { useState } from 'react';
import { tools } from '../constants/index.js';

const Software = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  

  return (
    <section className='c-space pt-7 pb-3 border-black-300'>
      <p className='grid-headtext'>What I Use?</p>

      {/* Responsive Section for Programming Languages */}
      <div className='flex flex-col md:flex-row justify-between items-center flex-wrap gap-5'>
        <div className='text-white-500 flex gap-2'>
          <p>Programming Languages</p>
        </div>
        <div className='flex gap-3 flex-wrap justify-center md:justify-end'>
          {tools.slice(0, 9).map((tool, index) => (
            <div
              key={index}
              className='social-icon'
              onMouseEnter={() => setHoveredIcon(tool.name)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <div className='flex items-center justify-center w-12 h-12 rounded-full bg-black hover:bg-gray-800 cursor-pointer relative transition-transform transform hover:scale-110 hover:shadow-lg'>
                <img src={tool.src} alt={tool.alt} className='w-1/2 h-1/2 cursor-pointer' />
                {hoveredIcon === tool.name && (
                  <div className='absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded z-10'>
                    {tool.name}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Section for Media Editing Tools */}
      <div className='flex flex-col md:flex-row justify-between items-center flex-wrap gap-5 mt-5'>
        <div className='text-white-500 flex gap-2'>
          <p>Tools for Media Editing</p>
        </div>
        <div className='flex gap-3 flex-wrap justify-center md:justify-end'>
          {tools.slice(9, 14).map((tool, index) => (
            <div
              key={index}
              className='social-icon'
              onMouseEnter={() => setHoveredIcon(tool.name)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <div className='flex items-center justify-center w-12 h-12 rounded-full bg-black hover:bg-gray-800 cursor-pointer relative transition-transform transform hover:scale-110 hover:shadow-lg'>
                <img src={tool.src} alt={tool.alt} className='w-1/2 h-1/2 cursor-pointer' />
                {hoveredIcon === tool.name && (
                  <div className='absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded z-10'>
                    {tool.name}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Responsive Section for Web Development */}
      <div className='flex flex-col md:flex-row justify-between items-center flex-wrap gap-5 mt-5'>
        <div className='text-white-500 flex gap-2'>
          <p>Web Development</p>
        </div>
        <div className='flex gap-3 flex-wrap justify-center md:justify-end'>
          {tools.slice(17, 21).map((tool, index) => (
            <div
              key={index}
              className='social-icon'
              onMouseEnter={() => setHoveredIcon(tool.name)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <div className='flex items-center justify-center w-12 h-12 rounded-full bg-black hover:bg-gray-800 cursor-pointer relative transition-transform transform hover:scale-110 hover:shadow-lg'>
                <img src={tool.src} alt={tool.alt} className='w-1/2 h-1/2 cursor-pointer' />
                {hoveredIcon === tool.name && (
                  <div className='absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded z-10'>
                    {tool.name}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Responsive Section for 3D Graphics and Animations */}
      <div className='flex flex-col md:flex-row justify-between items-center flex-wrap gap-5 mt-5'>
        <div className='text-white-500 flex gap-2'>
          <p>Tools for 3D Graphics and Animations</p>
        </div>
        <div className='flex gap-3 flex-wrap justify-center md:justify-end'>
          {tools.slice(14, 17).map((tool, index) => (
            <div
              key={index}
              className='social-icon'
              onMouseEnter={() => setHoveredIcon(tool.name)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <div className='flex items-center justify-center w-12 h-12 rounded-full bg-black hover:bg-gray-800 cursor-pointer relative transition-transform transform hover:scale-110 hover:shadow-lg'>
                <img src={tool.src} alt={tool.alt} className='w-1/2 h-1/2 cursor-pointer' />
                {hoveredIcon === tool.name && (
                  <div className='absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded z-10'>
                    {tool.name}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      
      

      {/* Responsive Section for Game Development */}
      <div className='flex flex-col md:flex-row justify-between items-center flex-wrap gap-5 mt-5'>
        <div className='text-white-500 flex gap-2'>
          <p>Tools for Game Development</p>
        </div>
        <div className='flex gap-3 flex-wrap justify-center md:justify-end'>
          {tools.slice(22).map((tool, index) => (
            <div
              key={index}
              className='social-icon'
              onMouseEnter={() => setHoveredIcon(tool.name)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <div className='flex items-center justify-center w-12 h-12 rounded-full bg-black hover:bg-gray-800 cursor-pointer relative transition-transform transform hover:scale-110 hover:shadow-lg'>
                <img src={tool.src} alt={tool.alt} className='w-1/2 h-1/2 cursor-pointer' />
                {hoveredIcon === tool.name && (
                  <div className='absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded z-10'>
                    {tool.name}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-between items-center flex-wrap gap-5 mt-5'>
        <div className='text-white-500 flex gap-2'>
          <p>Web Design</p>
        </div>
        <div className='flex gap-3 flex-wrap justify-center md:justify-end'>
          {tools.slice(21,22).map((tool, index) => (
            <div
              key={index}
              className='social-icon'
              onMouseEnter={() => setHoveredIcon(tool.name)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <div className='flex items-center justify-center w-12 h-12 rounded-full bg-black hover:bg-gray-800 cursor-pointer relative transition-transform transform hover:scale-110 hover:shadow-lg'>
                <img src={tool.src} alt={tool.alt} className='w-1/2 h-1/2 cursor-pointer' />
                {hoveredIcon === tool.name && (
                  <div className='absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded z-10'>
                    {tool.name}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Software;
