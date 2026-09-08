import React from 'react'
import { navItems } from './resource'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <>
    <div className='bg-indigo-100 w-full h-25 flex items-center justify-center'>

        <div className='bg-blue-300 w-315 h-15 mx-auto rounded-2xl flex items-center justify-between p-5'>

                <div>
                    <h1 className='text-2xl font-bold'>
                        <Link to={'/'}>
                            TODO
                        </Link>
                    </h1>
                </div>

                <div className='flex gap-10'>
                    {
                        navItems.map((nav ,index) => (
                           <Link
                            key={nav.path}
                            to={nav.path}
                            className='text-[15px] font-bold '
                           >
                                 {nav.name}
                           </Link>
                        ))
                    }
                </div>

        </div>
        

    </div>
    
    </>
  )
}

export default Navbar