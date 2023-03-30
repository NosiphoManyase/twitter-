import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import {HomeIcon, EllipsisHorizontalIcon} from '@heroicons/react/24/solid'
import {HashtagIcon, BellIcon, InboxIcon, BookmarkIcon, ClipboardIcon, UserIcon, EllipsisHorizontalCircleIcon} from '@heroicons/react/24/outline'

export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
        
        {/* Twitter Logo */}
        <div className="hoverEffect p-0 hover:bg-blue-100 xl:p-2">
            <Image 
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1200px-Twitter-logo.svg.png'
                width='50'
                height='50'
            />
        </div>

        {/* Menu */}
        <div className="mt-4 mb-2.5 xl:items-start">
            <SidebarMenuItem text='Home' Icon={HomeIcon} active/>
            <SidebarMenuItem text='Explore' Icon={HashtagIcon}/>
            <SidebarMenuItem text='Notifications' Icon={BellIcon}/>
            <SidebarMenuItem text='Messages' Icon={InboxIcon}/>
            <SidebarMenuItem text='Bookmarks' Icon={BookmarkIcon}/>
            <SidebarMenuItem text='Lists' Icon={ClipboardIcon}/>
            <SidebarMenuItem text='Profile' Icon={UserIcon}/>
            <SidebarMenuItem text='More' Icon={EllipsisHorizontalCircleIcon}/>
        </div>

        {/* Button */}
        <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Tweet</button>

        {/* Mini profile */}
        <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
            <img src="https://lh3.googleusercontent.com/a/AGNmyxbOVQE0gr8apPjAiCDoW0XQXMi-_Ux0ZuBOmXbTgMw=s288" 
            alt="user image"
            className="h-10 w-10 rounded-full xl:mr-2" />
            <div className="leading-5 hidden xl:inline">
                <h4 className="font-bold">Nosipho Manyase</h4>
                <p className="text-gray-500">@thatGirlN0si</p>
            </div>
            <EllipsisHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
        </div>
    </div>
  )
}
