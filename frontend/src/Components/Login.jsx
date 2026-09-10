import React, { useState } from 'react'

const Login = () => {

  const [isEmail , setIsEmail] = useState('')


  return (
    <div className='pt-10 '>

        <div className=' min-h-130 max-w-250 mx-auto   rounded-xl grid  md:grid-cols-2  grid-cols-1 lg:px-0 md:px-15 sm:px-10 px-10'>

          {/* left side */}
            <div className=' bg-blue-500 flex flex-col rounded-l-2xl'>
                <div className='mt-20 lg:px-10 md:px-10 sm:px-8 px-10'>
                  <h1 className='text-xl font-bold uppercase  text-white'>
                  welcome back
                </h1>

                  <h2 className='mt-5 lg:text-4xl md:text-4xl sm:text-3xl text-3xl font-bold uppercase text-white '>Stay focused.</h2>

                  <h3 className=' text-4xl lg:text-4xl md:text-4xl sm:text-4xl font-bold  uppercase text-yellow-300'>Get things done</h3>

                    <p className='text-[15px] mt-5 text-gray-300'>Login to manage your task track your pragressh and stay orgnized througout your day</p>

                   <div className='mt-5 text-gray-300'>
                     <li>manage your personal todos</li>
                    <li>secure your account</li>
                    <li>be happpy</li>
                   </div>

                </div>

            </div>


              {/* right side */}
            <div className='bg-gray-200 rounded-r-2xl flex flex-col'>
                   <div className='lg:px-10 md:px-10 sm:px-8 mt-5 '>
                     <h1 className='mt-10 lg:text-3xl md:text-5xl sm:text-4xl font-bold '>
                      LOGIN
                    </h1>
                    <p className='mt-3'>Welcome Back please filled your details</p>

                    <div className='flex flex-col '>

                        <label htmlFor="email">Email</label>
                        <input 
                        name='email'
                         type="text" 
                         placeholder='Enter your Email'
                        />

                        <label htmlFor="email">Passwprd</label>
                        <input 
                        name='password'
                         type="password" 
                         placeholder='Enter your Passwprd'
                        />


                    </div>

                   </div>
            </div>

        </div>


    </div>
  )
}

export default Login