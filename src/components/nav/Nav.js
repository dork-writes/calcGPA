import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Nav = () => {
  const { pathname } = useLocation();
  const  navigate = useNavigate();

  const border = (path) =>
  {
    return pathname === path ? 'border-b-zinc-500' : 'border-b-[transparent]';
  }

  const borderLeft = border('/calcGPA');
  const borderCenter = border('/calcGPA/cgpa');
  const borderRight = border('/calcGPA/sgpa');

  return (
    <header className='text-gray-200 h-[10vh] flex justify-center w-[100%] px-20'>
      <nav>
        <ul className='list-none flex space-x-5'>
            <li onClick={() => navigate('/calcGPA')} className={`border-b-4 py-2 px-4 rounded-b-sm ${borderLeft} hover:border-b-zinc-500 cursor-pointer transition-all`}>Default</li>
            <li onClick={() => navigate('/calcGPA/cgpa')} className={`border-b-4 py-2 px-4 rounded-b-sm ${borderCenter} hover:border-b-zinc-500 cursor-pointer transition-all`}>CGPA</li>
            <li onClick={() => navigate('/calcGPA/sgpa')} className={`border-b-4 py-2 px-4 rounded-b-sm ${borderRight} hover:border-b-zinc-500 cursor-pointer transition-all`}>SGPA</li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
