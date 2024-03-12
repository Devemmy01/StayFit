import React from 'react'

const Details = ({ exerciseDetail }) => {

  const { name, target, bodyPart, gifUrl, equipment } = exerciseDetail

  return (
    <div className='flex flex-col md:flex-row md:justify-around items-center gap-[60px] p-[20px] mt-16  '>
      <div className='shadow-md detail-card '>
        <img src={gifUrl} alt={name} loading='lazy' className='rounded-bl-[35px] rounded-tr-[35px]'/>
      </div>

      <div className='flex flex-col gap-[20px] w-[450px] lg:gap-[35px]'>
        <h3 className='text-4xl md:text-5xl font-Ojuju font-bold text-[#001219] dark:text-[#fff]'>{name}</h3>
        <h6 className='md:text-xl font-semibold text-[#001219] dark:text-[#fefcfbb1]'>Physical activity maintains your strength. A great way to work on your {target} is with
        {name}. You'll feel more upbeat and energized after doing it.</h6>
      </div>
    </div>
  )
}

export default Details