import React from 'react'
import { testimonials } from '../constants/constants'

function Testimonials() {
  return (
    <div className="my-16 md:my-24 tracking-wide">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-center">
        What people are saying
      </h2>
      <div className="flex flex-wrap mt-10">
        {testimonials.map((item, idx) => (
          <div key={idx} className="w-full sm:w-1/2 lg:w-1/3 px-4 my-3">
            <div className="bg-neutral-900 rounded px-2 py-2">
              {item.text}
              <div className="flex items-start my-5">
                <img src={item.image} alt={item.user} className='w-12 h-12 rounded-full mr-5'/>
                <div>
                  <p>{item.user}</p>
                  <span className='text-sm text-neutral-500 italic'>{item.company}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials