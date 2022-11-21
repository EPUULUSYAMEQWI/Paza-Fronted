import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { BsArrowLeftShort } from "react-icons/bs";
import { BiSend } from "react-icons/bi";
import AppContext from '../../context/Context';
import Moment from 'react-moment';
import { FaUserAlt } from "react-icons/fa";


const ForumComment = () => {
    const [comments, setComments] = useState([])
    const [commentField, setCommentField] = useState("")
    const {tokens, BASE_URL} = useContext(AppContext)
    const {state} = useLocation()
    const navigate = useNavigate()

    // console.log(comments)


    const getComments = async() => {
       
      const response = await fetch(`${BASE_URL}/api/forum/${state.id}/comments/`,{
              method:'GET',
              headers: {
                  'Content-Type': 'application/json',
                  "Authorization": "Bearer " + String(tokens.access)
              }
              
      })
      const data = await response.json()
      setComments(data)
      }

      useEffect(() => {
        getComments()
      }, [comments])

    
      const handleCommentPost = async(e) => {
        e.preventDefault()
     const response =  await fetch(`${BASE_URL}/api/forum/${state.id}/create-comment/`,{
              method:'POST',
              headers: {
                  'Content-Type': 'application/json',
                  "Authorization": "Bearer " + String(tokens.access)
              },
              body:JSON.stringify({'comment': commentField})

      })
      response ? setCommentField('') : setCommentField(commentField)
      }
    
  return (
    <>
    <div className="z-10 top-12 flex justify-between text-sm font-semi-bold bg-blue-100 text-gray-900 uppercase" style={{width:"1000px", marginLeft:"19px", height:"40px"}}>
    <div className="flex flex-row justify-between px-4 py-3" >
        <button onClick={() => navigate(-1)} style={{marginRight:"80px"}} className="flex justify-center items-center"><BsArrowLeftShort/>Go Back</button>
        <h3 style={{marginLeft:"180px"}} className="text-gray-600">{state.title}</h3>
        <h3 style={{marginLeft:"180px"}} className="text-gray-600">{state.username}'s forum </h3>
    </div>
    
    </div>
        
{
    comments.length < 1 ? <div className='relative grid grid-cols-1 gap-4 p-4 mt-12 mx-6 mb-8 border rounded-lg bg-white' style={{width:"900px"}}>
        <h4>No Comments</h4></div> :
    comments.map(comment => {
        return (
            <div key={comment.id} className="relative grid grid-cols-1 gap-4 p-4 mt-12 mx-6 mb-8 border rounded-lg shadow-sm bg-white" style={{width:"900px"}}>
            <div className="relative flex gap-4">
                <div className="flex flex-col w-full">
                    <div className="flex flex-row justify-between">
                        <p className="relative text-lg whitespace-nowrap text-blue-400 truncate overflow-hidden flex justify-center align-center"><span>@</span> <span>{comment.username}</span></p> 
                        <p className="text-gray-400 text-sm">
                            <Moment fromNow>
                            {comment.created}
                            </Moment>
                        </p>
                    </div>
                </div>
            </div>
            <p className="-mt-4 text-gray-500">{comment.comment}</p>
          </div>
        )
    })
}
  


<div className="z-10 fixed bottom-2 flex justify-between text-sm text-blue-900 uppercase font-mono">
    
    <div className="relative" style={{width:"1000px", marginLeft:"19px"}}>
        <form onSubmit={handleCommentPost}>   
                <input type="text" onChange={(e) => setCommentField(e.target.value)} value={commentField} id="comment" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Comment " required />
                <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><BiSend/></button>
        </form>
    </div>

</div>
    </>
  )
}

export default ForumComment