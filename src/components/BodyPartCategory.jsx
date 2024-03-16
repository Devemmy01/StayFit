// Importing React module and BodyPart component
import React from 'react'
import BodyPart from './BodyPart'

// Defining BodyPartCategory functional component with props
const BodyPartCategory = ({ data, bodyPart, setBodyPart }) => {
  // Rendering JSX elements
  return (
    <div className='flex items-center justify-center flex-wrap mt-[-2rem] md:mt-0'>
      {/* Mapping over data array and rendering BodyPart component for each item */}
      {data.map((item) => (
        <div key={item.id || item} itemID={item.id || item} title={item.id || item} className='text-[rgb(0,18,25)] dark:text-[#fefcfb]' >
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </div>
      ))}
    </div>
  )
}

// Exporting BodyPartCategory component
export default BodyPartCategory
