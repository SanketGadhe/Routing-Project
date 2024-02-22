import React from 'react'
import { NavLink } from 'react-router-dom'
const Fotter = () => {
  return (
    <div className='flex w-full h-96 bg-slate-100'>
      <div className="content w-1/2">

      </div>
      <div className="links w-1/2 flex gap-16">
        <div className="resources mt-10">
          <h3 className='text-xs font-bold'>RESOURCES</h3>
        <ul className='mt-5 text-center'>
            <NavLink to={'/'}>
              <li className='my-3'>Home</li>
            </NavLink>
            <NavLink to={'/About'}>
              <li className='my-3'>About</li>
            </NavLink>
          </ul>
        </div>
        <div className="Follow mt-10">
          <h3 className='text-xs font-bold'>FOLLOW US</h3>
        <ul  className=' mt-5 text-center'>
            <NavLink to={'/Github'} >
              <li className='my-3'>Github</li>
            </NavLink>
            <NavLink to={'/About'}>
              <li className='my-3'>LinkedIn</li>
            </NavLink>
          </ul>
        </div>
        <div className="legal mt-10">
          <h3 className='text-xs font-bold'>LEGAL</h3>
        <ul  className='mt-5'>
            <NavLink to={'/'}>
              <li className='my-3'>Privacy</li>
            </NavLink>
            <NavLink to={'/About'}>
              <li className='my-3'>Terms&Condition</li>
            </NavLink>
          </ul>
        </div>
          

      </div>
    </div>
  )
}

export default Fotter
