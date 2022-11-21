import png from '../png.png'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";


const Register = () => {

   
    
    

    return (
        <div className='h-screen w-full bg-gray-100 flex flex-col md:flex-row px-8 items-center justify-center'>
            <div className='h-5/6 w-1/2 bg-white flex items-center justify-center flex-col'>
                <img src={png} alt='paza'/>
            </div>
            <div className='h-5/6 w-1/2 bg-[#020922] flex flex-col items-center justify-center'>
                <h1 className='text-3xl text-white font-bold mb-4'>Signup</h1>
                <form >

                <div className="relative mb-4">
                <input 
                name='firstname'
                placeholder='FirstName'
                type='text'
                required
                    className='outline-none
                    bg-gray-200
                    placeholder-gray-500
                    text-black
                    pl-9 pr-4 py-2
                    w-full
                    rounded-full
                    transition 
                    focus:ring-2 
                    focus:ring-blue-300' />
            </div>
            <div className="relative mb-4">
                <input 
                name="lastname"
                placeholder='LastName'
                type='LastName'
                required
                    className='outline-none
                    bg-gray-200
                    placeholder-gray-500
                    text-black
                    pl-9 pr-4 py-2
                    w-full
                    rounded-full
                    transition 
                    focus:ring-2 
                    focus:ring-blue-300' />
            </div>
           
            <div className="relative mb-4">
                <input 
                name='username'
                placeholder='User Name'
                type='User Name'
                required
                    className='outline-none
                    bg-gray-200
                    placeholder-gray-500
                    text-black
                    pl-9 pr-4 py-2
                    w-full
                    rounded-full
                    transition 
                    focus:ring-2 
                    focus:ring-blue-300' />
            </div>
            
            <div className="relative mb-4">
                <input 
                name='county'
                placeholder='County'
                type='County'
                required
                    className='outline-none
                    bg-gray-200
                    placeholder-gray-500
                    text-black
                    pl-9 pr-4 py-2
                    w-full
                    rounded-full
                    transition 
                    focus:ring-2 
                    focus:ring-blue-300' />
            </div>
            <div className="relative mb-4">
                <input 
                name='password1'
                placeholder='Password'
                type='Password'
                required
                    className='outline-none
                    bg-gray-200
                    placeholder-gray-500
                    text-black
                    pl-9 pr-4 py-2
                    w-full
                    rounded-full
                    transition 
                    focus:ring-2 
                    focus:ring-blue-300' />
            </div>
            <div className="relative mb-4">
                <input 
                name='password2'
                placeholder='Confirm Password'
                type='Password'
                required
                    className='outline-none
                    bg-gray-200
                    placeholder-gray-500
                    text-black
                    pl-9 pr-4 py-2
                    w-full
                    rounded-full
                    transition 
                    focus:ring-2 
                    focus:ring-blue-300' />

<button type='submit' className='w-1/3 bg-blue-400 pt-2 pb-2 mb-4 rounded-full text-1xl text-white'>
                 Signup
            </button>
            
            
            
                        </div>
            

            
                </form>
                </div>
           

            
        </div>
    )
}


export default Register
