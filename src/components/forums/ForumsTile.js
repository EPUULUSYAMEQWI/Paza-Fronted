import React from 'react';

const ForumsTile = ({content})=>{
    return (
        <div className='w-full bg-gray-200 shadow-sm p-3 mb-1'>
            <h1 className='font-bold text-xl'>{content.title}</h1>
            <h3 className='text-gray-500'> {content.name}</h3>
            <h3 className='text-gray-500'> {content.post}</h3>
            <h3 className='text-gray-500'> {content.topic}</h3>


            
        </div>
    )
}
export default ForumsTile