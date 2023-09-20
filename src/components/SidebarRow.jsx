import React from 'react'

const SidebarRow = ({Icon,title}) => {
  return (
    <div className='flex p-3 hover:bg-gray-200 rounded-full cursor-pointer'>
        <Icon className="w-6 text-blue-400" ></Icon>
        <p className='flex hidden sm:inline-flex font-medium'>{title}</p>
    </div>
  )
}

export default SidebarRow