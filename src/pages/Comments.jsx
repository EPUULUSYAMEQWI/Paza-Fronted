import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import CommentsTile from "../components/comments/CommentsTile";
import axios from "axios";

const Comments = ()=>{


  const [data, setData] = useState({})
  const fetchdata=()=> {
    axios.get("http://127.0.0.1:8000/admin/api/forum/${id}/comments")
    .then(res => setData (res))
    .catch(err => console.log(err));

  }

useEffect(() => {
  
  fetchdata()
   console.log(data)
});

const comments = data.data;

console.log("data")

    if(data){
      return(
          <div className="m-2 md:m-10 p-2 md:p-10 bg-white text-black">
              <Header title="Comments" category=""/> 
              {
                comments && comments.map((comment) => {
                  return <CommentsTile content={comment} key={comment.created}/>
                })
              }  
          </div>
      )
    }else{
      return null
    }


}
export default Comments