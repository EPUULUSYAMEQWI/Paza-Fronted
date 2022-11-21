import React from 'react';

const CommentsTile = ({content})=>{
    return (
        <div className='w-full bg-gray-200 shadow-sm p-3 mb-1'>
            <h1 className='font-bold text-xl'>{content.body}</h1>
            <h3 className='text-gray-400'> {content.created}</h3>
            <h3 className='text-gray-400'> {content.post}</h3>
            <h3 className='text-gray-400'> {content.author}</h3>


            
        </div>
    )
}
export default CommentsTile