import React from 'react'

const Header = () => {
  return (
    <header  className="bg-indigo-500 h-20">
      <div className="container flex justify-between ">
          <h1 className="text-white text-3xl leading-[80px]">Min of Health</h1>
          <ul className='flex gap-4 leading-[80px] text-xl text-white uppercase'>
              <li><a href="/" className='hover:text-indigo-900 '>Home</a></li>
              <li><a href="/" className='hover:text-indigo-900 '>Province</a></li>
              <li><a href="/" className='hover:text-indigo-900 '>Something Else</a></li>
          </ul>
          <div className='mt-5'>
              <button className='btn btn-light'>Sign out</button>
          </div>
      </div>
    </header>
  )
}

export default Header
