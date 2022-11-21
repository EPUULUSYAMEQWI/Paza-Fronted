import React, { useContext } from "react";
import Header from "../components/Header";

import { BiUpvote, BiDownvote, BiCommentDetail } from "react-icons/bi";
import "./Forums.css";
import ForumItem from "../components/forums/ForumItem";
import AppContext from "../context/Context";


const Forum = () => {
   const {forums} = useContext(AppContext)
//    console.log(forums);

    return (
        <div className="my-3 px-8">
            <div className="mx-5">
                <Header title="Forums" category="" />
            </div>
            {forums.map((item) => (
                <ForumItem data={item} key={item.id} />
            ))}
        
        </div>
    );
};
export default Forum;
