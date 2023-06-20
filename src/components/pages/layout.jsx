import React from 'react'
import {Outlet} from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

export default function Layout() {
    return(
        <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden overflow-x-auto overflow-y-auto'>
            <Sidebar/>
            <div className="flex-1 h-screen w-screen  flex flex-col overflow-x-auto">
            <Header/>
            <div className='p-6 text-lg leading-8 min-h-4 overflow-auto '>{<Outlet/>}</div>
        </div>

        </div>
    )
}