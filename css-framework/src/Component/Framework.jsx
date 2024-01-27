import React from 'react'

const Framework = () => {
  return (
    <div className='h-lvh '>
        <div className='flex bg-red-500 px-10 py-6  justify-between  text-white ' >
            <div className='flex  w-1/3 justify-between'>
            <h1 className='text-4xl font-medium'>Kalvium</h1>
            <ul className='flex justify-between items-center w-[300px] '>
                <li>About us</li>
                <li>Contacts</li>
                <li>Courses</li>
            </ul>
            </div>
            <button className='border-2 py-2 px-3 rounded-md'>Login</button>

        </div>
        <div className=' m-10 mx-[150px]'>
            <button className='bg-blue-500 text-white px-3 py-2 font-semibold rounded'>Button One</button>
            <div className='border-2 border-red-400 my-5 px-5 py-2 bg-red-100 text-red-600 rounded-xs'><span className='font-bold text-red-700'>Alert!</span> This is awesome!</div>

        </div>
        <div className='flex shadow-2xl mt-[100px] w-[35%] rounded-md m-auto py-20 justify-between p-7'>
            <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="" />
            <div>
                <h1 className='text-4xl font-semibold'>Kalvium Store</h1>
                <p className='text-gray-600'>You have a new course!</p>
            </div>
        </div>
        <footer className='bg-gray-300 absolute bottom-0 w-full text-center py-5'>
            <p>©️ 2024 Copyright:Kalvium</p>
        </footer>
    </div>
  )
}

export default Framework