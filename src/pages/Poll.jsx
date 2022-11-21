import React from "react";
import Header from "../components/Header";
import PollItem from "../components/poll/PollItem";
import AppContext from "../context/Context";
import { useContext, useState } from "react";

const Poll = () => {
   const {polls, user, tokens, BASE_URL} = useContext(AppContext)
   const [vote, setVote] = useState('')
//    console.log(polls);

   const handleVoteBtn = async(e, id) => {
    
        setVote(e.target.value)
    
      
    const response = await fetch(`${BASE_URL}/api/question/${id}/choice/`,{
      method:"POST",
      headers: {
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + String(tokens.access)
      },
      body:JSON.stringify({
        "choice":vote
      })
    })
    const data = await response.json()
    console.log(response)
    if(response.status === 201) {
        alert(`${user.username}, you voted ${vote}`)
      
    }else if(response.status === 403){
      alert(`${user.username},${data}`)
    }
  

  
}
   
    return (
        <div className="m-2 md:m-10 p-2 md:p-10 bg-white">
            <Header title="Poll" category="" />
                {polls.map((item) => (
                     <div id={item.id} key={item.id} className="w-3/5 bg-white rounded-lg border shadow-md mb-4">
                     <div className="p-4 bg-white rounded-lg md:p-8">
                         <p className="mb-5 text-gray-500">
                            {item.question}
                         </p>
                         <div className="flex items-center justify-around">
                            

                             <button
                                 id={item.id}
                                 className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                                 onClick={(e) =>handleVoteBtn(e,item.id)}
                                 name="Yes" value={"Yes"}
                             >
                                 Yes
                             </button>
                        
                             <button
                                 id={item.id}
                                 className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                                 onClick={(e) =>handleVoteBtn(e,item.id)}
                                 name="No" value="NO"
                             >
                                 No
                             </button>
                         </div>
                     </div>
                 </div>
                ))}
            
        </div>
    );
};

export default Poll;
