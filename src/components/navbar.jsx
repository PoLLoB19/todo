import React from 'react'

function navbar() {
  return (
    <div className='bg-[#322F82] p-4 flex justify-between '>
      <div className='text-white text-xl'>
          Itask
      </div>
      <div className="menu  flex gap-8">
        <a href="#" className="text-white text-sm">Home</a>
        <a href="#" className="text-white text-sm">Your Tasks</a>
      </div>
    </div>
  )
}

export default navbar
