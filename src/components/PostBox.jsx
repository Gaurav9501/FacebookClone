import React from 'react'

const PostBox = () => {
  return (
    <div className='justify-center'>
    
    
      <div className='flex space-x-4 p-4 mx-auto items-center'>
        <img className=' rounded-full h-8 w-8 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Mf2RhBiIXE0aGRMqBgLmPjJITpi9p7wew5_BK0GzQg&usqp=CAU&ec=48665698"></img>
        <form className='flex flex-1'>
          <input className='flex rounded-full bg-gray-200 h-12 w-80 ' type="text" placeholder="Enter post"></input>
        </form>
      </div>

      <button> like</button>

    </div>
  )
}

export default PostBox 