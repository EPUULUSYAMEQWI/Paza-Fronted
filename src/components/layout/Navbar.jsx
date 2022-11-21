import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md';
import AppContext from '../../context/Context';
import { useContext,useState } from 'react';

const Navbar = () => {
  const {user, tokens, logoutUser} = useContext(AppContext);
  const[hidden, setHidden] = useState(true);



 
  return (
    <div className='flex justify-end flex-row p-2 md:mx-6 relative'>
      <div className="flex flex-row justify-between items-center">

      <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg">
            {/* <img  className='rounded-full w-8 h-8' src={avatar} alt="" /> */}

            <div className="rounded-full w-8 h-8 bg-cyan-500 text-white text-bold flex items-center justify-center">
              <span className='text-bold uppercase'>{user.username.charAt(0)}</span>
            </div>
            <p>
              <span className='text-gray-400 text-14'>Hi,</span>
              { ' ' }   
              <span className='text-gray-600 text-14 font-bold ml-1 mr-2'>{user.username}</span>
              {
                hidden ? null :
                <button className=' text-red-500'onClick={logoutUser}>Logout</button>


              }
              {/* <button onClick={logoutUser}>Logout</button> */}
            </p>
            <MdKeyboardArrowDown onClick={()=>setHidden(!hidden)}  
            // onClick={setHidden(true)}
            className='text-gray-400 text-14'/>
          </div>
      </div>
    </div>
  )
}

export default Navbar