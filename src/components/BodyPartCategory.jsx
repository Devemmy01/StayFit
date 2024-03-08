import React from 'react'
import BodyPart from './BodyPart'

const BodyPartCategory = ( { data } ) => {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id || item}
        itemId={item.id || item}
        title={item.id || item} className='text-[#001219] dark:text-[#fefcfb]' >
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </div>
      ))}
    </div>
  )
}

export default BodyPartCategory