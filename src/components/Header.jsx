import React from 'react'
import '../index.css'
import {SearchIcon, HomeIcon, FlagIcon, PlayIcon, UserGroupIcon, ShoppingCartIcon} from '@heroicons/react/outline'
import HeaderIcons from './HeaderIcons'
const Header = () => {
    return (
        <div className='sticky top-0 z-20 bg-white flex items-center p-2 shadow-md' >
         
         {/* left */}
            <div className='flex items-center'>
                <img className='h-10 m-2' 
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" />

                <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
                    <SearchIcon className='h-6'/>
                    <input className='bg-gray-100 focus:border:none' type="text" placeholder="Search Facebook"></input>
                </div>
            </div>

            {/* Center */}
            <div className='flex justify-left ml-80 flex-grow '>
                <HeaderIcons Icon={HomeIcon} Active={true}></HeaderIcons>
                <HeaderIcons Icon={FlagIcon}></HeaderIcons>
                <HeaderIcons Icon={PlayIcon}></HeaderIcons>
                <HeaderIcons Icon={UserGroupIcon}></HeaderIcons>
                <HeaderIcons Icon={ShoppingCartIcon}></HeaderIcons>
            </div>

            {/* Right */}

            <div>
                {/* profile pic */}
                <p className='whitespace-nowrap font-semibold pr-3'>Gaurav Agarwal</p>
            </div>
      </div>
    )
}

export default Header
