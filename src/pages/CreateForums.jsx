import React, { useContext, useState } from 'react'
import Header from '../components/Header'
import AppContext from '../context/Context'
import { useNavigate } from 'react-router-dom'

const CreateForums = () => {

    const {tokens, BASE_URL} = useContext(AppContext)
    const navigate = useNavigate()

    const handleSubmitForum = async (e) => {
        e.preventDefault();
        const title = e.target.title.value
        const text = e.target.text.value
        
        const response = await fetch(`${BASE_URL}/api/create-forum/`, {
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + String(tokens.access)
              },
              body:JSON.stringify({
                "title":title,
                "text":text,
              })
        })

        const data = await response.json()
        if(response.status === 201){
            alert("Forum created successfully")
            navigate("/dashboard")
        }
        
        
    } 
      
    return (
    <div className='m-2 md:m-10 p-2 md:Dep-10 bg-white rounded-3xl'>
        <Header category='' title='Create Forum'/>
        <div className='w-full bg-gray-300 p-4 rounded-lg shadow-sm h-400'>
            <form onSubmit={handleSubmitForum}>
                
            

            <div className="relative mb-4">
                <span className="absolute flex inset-y-0 items-center pl-4 text-gray-400"></span>
                <input 
                name='title'
                placeholder='Title'
                type='text'
                required
                    className='outline-none
                    bg-gray-200
                    placeholder-gray-500
                    text-black
                    pl-9 pr-4 py-2
                    w-full
                    rounded-lg 
                    transition 
                    focus:ring-2 
                    focus:ring-blue-300' />
            </div>
            <div className="relative mb-4">
                <span className="absolute flex inset-y-0 items-center pl-4 text-gray-400"></span>
                <textarea 
                name='text'
                placeholder='Description'
                type='text'
                required
                    className='outline-none
                    rows="8"
                    bg-gray-200
                    placeholder-gray-500
                    text-black
                    pl-9 pr-4 py-2
                    w-full
                    rounded-lg 
                    transition 
                    focus:ring-2 
                    focus:ring-blue-300' />
            </div>
            <button className='w-1/2 bg-blue-600 hover:bg-blue-400 pt-3 pb-3 rounded-lg text-3xl text-white'>
                 POST Forum
            </button>

            </form>
        </div>
    </div>
    )
}

export default CreateForums
