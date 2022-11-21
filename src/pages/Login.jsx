import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import png from '../png.png'
import axios from "axios";
import { useContext } from 'react';
import AppContext from '../context/Context';



const Login = () => {
    const router = useNavigate();
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const {loginUser, isLoading} = useContext(AppContext)
    
    

    const handleSubmit= (e) => {
        e.preventDefault();
        // console.log(username)
        // console.log(password)
        axios.post('https://vast-wildwood-07594.herokuapp.com/api/login/', {
            username: username,
            password: password,
        
    })
    .then(function (response) {
        console.log(response);
        router("/dashboard")
      })
      .catch(function (error) {
        console.log(error);
      });
}




    return (
        <div className='h-screen w-full bg-gray-100 flex flex-col md:flex-row px-8 items-center justify-center'>
            <div className='h-5/6 w-1/2 bg-white flex items-center justify-center flex-col'>

                <img src={png} alt='paza'/>
            </div>
            <div className='h-5/6 w-1/2 bg-[#020922] flex flex-col items-center justify-center'>
                <h1 className='text-3xl text-white font-bold mb-4'>Login</h1>
                <form onSubmit={loginUser}>
                <div className="relative mb-4">
                <input 
                name='username'
                placeholder='Username'
                type='text'
                required
                    className='outline-none
                    bg-gray-200
                    placeholder-gray-500
                    text-black
                    pl-9 pr-4 py-2
                    w-full
                    transition 
                    focus:ring-2 
                    focus:ring-blue-300' />
            </div>
            <div className="relative mb-4">
                <input 
                 name='password'
                placeholder='Password'
                type='Password'
                required
                    className='outline-none
                    bg-gray-200
                    placeholder-gray-500
                    text-black
                    pl-9 pr-4 py-2
                    w-full
                    transition 
                    focus:ring-2 
                    focus:ring-blue-300' />
                    </div>
                    <div className="relative mb-4">
                        <p className='text-white ont-semibold'>Don't have an account? <Link className='text-blue-400' to="/signup">Sign Up</Link></p>
                    </div>
                    {
                      !isLoading ?
                                <button type='submit' className='bg-blue-400 pt-2 pb-2 w-full text-1xl text-white'>
                                    Login
                                </button>
                                :
                                <button type='submit' className='w-full bg-gray-400 pt-2 b-2  text-1xl text-white' disabled>
                                    <div class="flex  justify-center items-center">
                                    <div class="spinner-border animate-spin inline-block w-6 h-6 border-4 rounded-full mb-1" role="status">
                                    </div>
                                    </div>
                                </button>
                    }
                    </form>
                    </div>
                  
                    </div>
            
            

       
            
            
        
    )
}

export default Login
