import classNames from 'classnames'
import React, { useState } from 'react'
import { BiMenu } from "react-icons/bi";
import {HOME_SIDEBAR_LINKS} from '../../library/const/navigation'
import { Link, useLocation} from 'react-router-dom'

const linkClasses = 'flex items-left gap-0.5 font-light px-1 py-3 hover:bg-sky-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'



export default function Sidebar() {

    const [open,setOpen] =useState(true);
    return (
        <section className='flex gap-6'>
        <div className={`bg-sky-600  min-h-screen ${
          open ? "w-60" : "w-14"
        } duration-500 text-gray-100 px-4`}>
            <div className='flex justify-end gap-1 '>
            <span className='flex justify-end gap-4 text-neutral-100 text-lg'></span>
                <BiMenu fontSize={30} className='cursor-pointer text-White relative bg-transparent' onClick={()=>setOpen(!open)}/>
                
            </div>
            <div className={` group flex items-center text-sm  gap-3.5 font-medium p-4  rounded-md`} >
            <div  className={`flex-1 whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-12 "
                }`}>
                {HOME_SIDEBAR_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item} />
                )
                )}
                 </div>
        </div>
        </div>
        </section>
    )
}

function SidebarLink({item}) {

    const {pathname} = useLocation()
    return(
        <Link to={item.path} className={classNames(pathname == item.path ? 'bg-sky-800 text-white': 'text-neutral-400',linkClasses)}>
        <span className='text-xl'>{item.icon}</span>
        {item.label}


        </Link>
    )
}
