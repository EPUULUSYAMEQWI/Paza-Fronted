import React, { useContext, useState } from 'react'
import Header from '../components/Header'
import { FaEdit } from 'react-icons/fa'
import AppContext from '../context/Context';
import { useNavigate } from 'react-router-dom';


const CreatePoll = () => {

    const [question, setQuestion] = useState('');
    const {tokens, BASE_URL} = useContext(AppContext)

    const navigate = useNavigate()
    

    const handleSubmit = async(e) => {
        e.preventDefault();

        const response = await fetch(`${BASE_URL}/api/create-question/`, {
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + String(tokens.access)
              },
              body:JSON.stringify({
                "question":question
              })
        })

        const data = await response.json()
        if(response.status === 201){
            alert("poll created successfully")
            navigate("/dashboard")
        }
        
        
    }   
    return (
    
        <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
            <Header category='' title='Create Poll'/>
            <div className='w-full bg-gray-300 p-4 rounded-lg shadow-sm h-400'>
            <form onSubmit={handleSubmit}>
                
            
            <div className="relative mb-4">
                <span style={{fontSize:"20px"}} className="absolute  flex inset-y-0 items-center pl-4 text-gray-400"><FaEdit /></span>
                <input 
                onChange={(e) => setQuestion(e.target.value)}
                name='question'
                placeholder='Question'
                type='text'
                required
                    className='outline-none
                    bg-gray-200
                    placeholder-gray-500
                    text-black
                    pl-9 pr-4 py-4
                    w-full
                    h-20
                    rounded-lg 
                    transition 
                    focus:ring-2 
                    focus:ring-blue-300' />
            </div>
            
            <button type="submit" className='w-1/2 bg-blue-600 hover:bg-blue-400 pt-3 pb-3 rounded-lg text-3xl text-white'>
                 SUBMIT
            </button>

            </form>
        </div>
            
        </div>
    )
}

export default CreatePoll
