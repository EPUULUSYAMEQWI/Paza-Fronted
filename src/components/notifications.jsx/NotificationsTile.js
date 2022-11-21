import React from 'react';

const NotificationsTile = ({content})=>{
    return (
        <div className='w-full bg-gray-200 shadow-sm p-3 mb-1'>
            <h1 className='font-bold text-xl'>{content.title}</h1>
            <h3 className='text-gray-400'> {content.subtitle}</h3>
            <h3 className='text-gray-400'> {content.date}</h3>

            
        </div>
    )
}
export default NotificationsTile