import React, { useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'
import './Dashboard.css'
import pie from '../pie.png'

const Dashboard = () => {
  const [data, setData] = useState({})
  const fetchdata=()=> {
    axios.post("https://vast-wildwood-07594.herokuapp.com/api/resident/")
    .then(res => setData (res))
    .catch(err => console.log(err));

  }
  console.log(data)
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      {/* <Header category='' title='Dashboard'/>
      <button className='bg-blue-200' 
      onClick={fetchdata}>fetch</button> */}

<div className='boxes-content'>
                        <div className="box-content1" >
                        <h2 id='pos'>All Posts</h2>
                        </div>
                        <div className="box-content2"  >
                        <h2 id='for'>Forums</h2>
                        </div>
                        <div>
                </div>
                    </div>
                    <div className='charts'>
                  <div className='chart1'>
                   <img src ={pie} alt='paza'/>
                   </div>
                   <div className='chart2'>
                   <img src={pie} alt='paza'/>
                   </div>
                </div>




    </div>
      

  )
}

export default Dashboard