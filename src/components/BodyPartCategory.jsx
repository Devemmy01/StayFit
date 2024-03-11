import React from 'react'
import BodyPart from './BodyPart'

const BodyPartCategory = ({ data, bodyPart, setBodyPart }) => {
  return (
    <div className='flex items-center justify-center flex-wrap mt-[-2rem] md:mt-0'>
      {data.map((item) => (
        <div key={item.id || item}
        itemID={item.id || item}
        title={item.id || item} className='text-[rgb(0,18,25)] dark:text-[#fefcfb]' >
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </div>
      ))}
    </div>
  )
}

export default BodyPartCategory