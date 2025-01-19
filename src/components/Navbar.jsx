import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-red-400 text-white py-2'>
        <div className='logo'>
            <span className=' text-4xl font-signature mx-8 '>Listify</span>
        </div>
        <ul className='flex gap-8 mx-9 flex-row items-center justify-center'>
            <li className='cursor-pointer hover:font-bold transition-shadow duration-500'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-shadow duration-500'>Your Tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar