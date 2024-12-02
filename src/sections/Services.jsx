import React from 'react';
import { myServices } from '../constants';

const Services = () => {
  return (
    <section className='c-space my-20' id='services'>
      <div className='w-full text-white-600'>
        <h3 className='head-text pb-6'>My Services</h3>
        <div className='work-content'>
          <div className='sm:py-10 py-5 sm:px-5 px-2.5'>
            {myServices.map(({ id, name, title }, index) => (
              <div key={id} className='work-content_container group'>
                <div className='sm:p-5 px-2.5 py-5 flex items-start'>
                  <span className='grid-subtext pr-2'>{id}.</span>
                  <div>
                    <p className='font-bold text-white-800'>{name}</p>
                    <p className='group-hover:text-white transition ease-in-out duration-500'>{title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
