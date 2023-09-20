
import React from 'react'

const StoryCard = ({name,src,profile}) => {
  return (
      <div className='relative h-14 w-14 md:w-20 md:h-40 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3'>
          <img className='object-cover filter brightness-75 rounded-full lg:rounded-3xl' src={src} />
      </div>
  )

}

export default StoryCard