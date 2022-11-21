import React from 'react'
import Sidebar from '../components/layout/Sidebar'
import { useStateContext } from '../context/ContextProvider';
import Navbar from '../components/layout/Navbar'
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard'
import Forums from './Forums';
import Feedback from './Feedback';
import CreateForums from './CreateForums';
import CreatePoll from './CreatePoll';
import Comments from './Comments'
import Notifications from './Notifications';
import Community from './Community';
import Poll from './Poll';
import ForumComment from '../components/forums/ForumComment';
import AppContext from '../context/Context';
import { useContext } from 'react';


const Home = () => {
  
  const {activeMenu} = useStateContext();

  const {user} = useContext(AppContext)
  // console.log(user.admin)
  const isAdmin = user.is_staff ? 'admin' : 'user'


  return (
    <div className="flex relative dark:bg-main-dark-bg">
      { 
        activeMenu ? (  
          <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
            <Sidebar />
          </div>
        ): 
        <div className='w-0 dark:bg-secondary-dark-bg'>
          <Sidebar />
        </div>
      }

      <div className={
      `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <Navbar />
          </div>

          <div>
            <Routes>
              {
                (user.role === 'admin') ? 
                <Route path='/' element={<Dashboard /> } />
                :
                <Route path='/' element={<Forums /> } />
              }
              <Route path='/' element={<Dashboard /> } />
              <Route path='/dashboard' element={<Dashboard /> } />
              <Route path='/forums' element={<Forums /> } />
              <Route path='/feedback' element={<Feedback /> } />
              <Route path='/comment' element={<Comments /> } />
              <Route path='/createforums' element={<CreateForums /> } />
              <Route path='/createpoll' element={<CreatePoll /> } />
              <Route path='/notifications' element={<Notifications /> } />
              <Route path='/community' element={<Community /> } />
              <Route path='/poll' element={<Poll /> } />
              <Route path='/forumcomments' element={<ForumComment />} />
            </Routes>
          </div>
      </div>
    </div>
  )
}

export default Home