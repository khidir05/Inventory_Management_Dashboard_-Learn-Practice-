"use client";

import React from 'react';
import { Menu,} from 'lucide-react';

const Sidebar = () => {
  return (
    <div>
        {/*TOP LOGO */}
    <div className='flex gap-3 justify-between md:justify-normal items-center pt-8'>
        <div>logo</div>
        <h1 className='font-extrabold text-2xl'>EDSTOCK</h1>
        <button className='md:hidden px:3 py-3 bg-gray-100 rounded-full hover:bg:blue-100' onClick={() => {}}>
        <Menu className='w-4 h-4' />
    </button>
    </div>
    <div className='flex-grow'>
        {/* Links Here */}
    </div>
    {/* FOOTER */}
    <div>
        <p className='text-center text-xs text-gray-500'>&copy; 2024 EdStock</p>
    </div>
    </div>
  );
};

export default Sidebar;