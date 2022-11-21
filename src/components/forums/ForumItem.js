import { useContext, useEffect, useState } from "react";
import { BiUpvote, BiDownvote, BiMessageAlt, BiComment, BiSend } from "react-icons/bi";
import Moment from 'react-moment';
import AppContext from "../../context/Context";
import { useNavigate } from "react-router-dom";

const ForumItem = ({ data, key}) => {
    const {tokens, BASE_URL} = useContext(AppContext)
    const [votes, setVotes] = useState(null)
   const [upvote, setUpVote] = useState(null)
   const [downvote, setDownVote] = useState(null)
   const [comments, setComments] = useState(null)
  
    const navigate = useNavigate()
    


    const handleComments = (e) => {
       
        navigate(
            "/forumcomments",
            {
                state: {
                  id: e.target.id,
                  username: data.username,
                  title : data.title
                }
              }
            )
    }


    const handleUpvote = async() => {
       
        const response = await fetch(`${BASE_URL}/api/forum/${data.id}/post-vote/`, {
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + String(tokens.access)
              },
              body:JSON.stringify({
                "up_vote":1,
                "down_vote":0,
              })
        })
        const dataText = await response.json()
        // if (response.status === 201){
        //     alert("you, upvoted the forum")
        // }
        if (response.status === 403){
            alert(dataText)
        }
        
        
      }
      
      const handleDownvote = async(e) => {
        const response = await fetch(`${BASE_URL}/api/forum/${data.id}/post-vote/`, {
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + String(tokens.access)
              },
              body:JSON.stringify({
                "up_vote":0,
                "down_vote":1,
              })
        })
        const dataText = await response.json()
        // if (response.status === 201){
        //     alert("you, upvoted the forum")
        // }
        if (response.status === 403){
            alert(dataText)
        }
        
      }
    
      const getComments = async() => {
       
        const response = await fetch(`${BASE_URL}/api/forum/${data.id}/comments/`,{
                method:'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": "Bearer " + String(tokens.access)
                }
                
        })
        const dataText = await response.json()
        setComments(dataText)
        }
  
        useEffect(() => {
          getComments()
        }, [comments])
        const getVotes = async() => {
       
            const response = await fetch(`${BASE_URL}/api/forum/${data.id}/votes/`,{
                    method:'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": "Bearer " + String(tokens.access)
                    }
                    
            })
            const dataText = await response.json()
            setVotes(dataText)
            }
      
            useEffect(() => {
              getVotes()
            }, [votes])
            

        var totalVotes = votes ? votes : [] 
        var commentCount = comments ? comments : []
        
         const upvotes = totalVotes ? totalVotes.filter(vote => vote.up_vote === 1) : []
        const downvotes = totalVotes ? totalVotes.filter(vote => vote.down_vote === 1) : []

        // // useEffect(() => {
        // //     setUpVote(upvotes)
        // //     setDownVote(downvote)
        // // }, [])
        //  console.log(downvotes.length);
        
    return (
        <div key={data.id} className="w-3/4 bg-white rounded-lg border shadow-md mb-4">
            <div className="p-4 bg-white rounded-lg md:p-8">
                <div className="flex items-center justify-between mb-2">
                    <div class="flex items-center space-x-4">
                        {/* <img
                            class="w-10 h-10 rounded-full"
                            src={`https://avatars.dicebear.com/api/adventurer/jeseleos.svg`}
                            alt=""
                        /> */}
                        
                        <div class="font-medium flex ">
                            <h4 className="text-blue-500 ">Posted by <span className=""> {data.username}</span> </h4>  
                        </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                    <Moment fromNow>
                        {data.created}
                    </Moment>
                            
                    </p>
                </div>
                <h2 className="mb-3 text-2xl font-extrabold tracking-tight text-gray-900">
                    {data.title} 
                </h2>
                <p className="mb-3 text-gray-500">{data.text}</p>
                <div className="flex items-center justify-around">
                    
                <button
                    type="button"
                    className="inline-flex items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
                    onClick={handleUpvote}
                    id={data.id}
                    
                >
                    <BiUpvote className="w-6 h-6 mr-3" />
                    <span className="inline-flex justify-center items-center ml-2 w-4 h-4 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                        {upvotes.length}
                    </span>
                </button>

                <button
                    type="button"
                    className="inline-flex items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
                    onClick={handleDownvote}
                    id={data.id} 
                    
                >
                    <BiDownvote className="w-6 h-6 mr-3" />
                    <span className="inline-flex justify-center items-center ml-2 w-4 h-4 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                        {downvotes.length}
                    </span>
                </button>

                <button
                    id={data.id}
                    type="button"
                    className="inline-flex items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
                    onClick={handleComments}
                >
                    <BiMessageAlt className="w-6 h-6 mr-3" />
                    <span className="inline-flex justify-center items-center ml-2 w-4 h-4 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                        {commentCount.length}
                    </span>
                </button>

                </div>
            </div>
        </div>
    );
};





export default ForumItem;
