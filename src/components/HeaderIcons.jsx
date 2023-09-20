import React from 'react'

const HeaderIcons = ({Icon,Active}) => {
    console.log(Icon)
  return (
      <div className={`flex ml-8 p-3 
                      cursor-pointer 
                      hover:bg-gray-200  
                      rounded-full    
                      ${Active && 'text-blue-400'}
                      `}>
      <Icon className="h-6" ></Icon>
      </div>
  )
}

export default HeaderIcons