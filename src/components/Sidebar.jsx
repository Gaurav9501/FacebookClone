import React from 'react'
import { ChevronDownIcon,ShoppingBagIcon, UserGroupIcon, UserIcon } from '@heroicons/react/outline'
import { CalendarIcon,ClockIcon,DesktopComputerIcon,UsersIcon } from '@heroicons/react/outline'
import SidebarRow from './SidebarRow'
const Sidebar = () => {
  return (
      <div className='mt-15'>
          <SidebarRow Icon={UserIcon} title="Friends"></SidebarRow>
          <SidebarRow Icon={UserGroupIcon} title="Groups"></SidebarRow>
          <SidebarRow Icon={ShoppingBagIcon} title="Market"></SidebarRow>
          <SidebarRow Icon={DesktopComputerIcon} title="Watch"></SidebarRow>
          <SidebarRow Icon={CalendarIcon} title="Calender"></SidebarRow>
          <SidebarRow Icon={ClockIcon} title="Clock"></SidebarRow>
          <SidebarRow Icon={ChevronDownIcon} title="See More"></SidebarRow>
      </div>
  )
}

export default Sidebar