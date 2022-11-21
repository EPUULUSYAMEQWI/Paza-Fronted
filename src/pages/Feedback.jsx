import React from 'react'
import Header from '../components/Header'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const Feedback = () => {

  
const data = [
  {
    name: "Water",
    yes: 4000,
    no: 2400,
    amt: 2400
  },
  {
    name: "Security",
    yes: 3000,
    no: 1398,
    amt: 2210
  },
  {
    name: "Education",
    yes: 2000,
    no: 9800,
    amt: 2290
  },
  {
    name: "Sports",
    yes: 2780,
    no: 3908,
    amt: 2000
  },
  {
    name: "Entertainment",
    yes: 1890,
    no: 4800,
    amt: 2181
  },
  {
    name: "Health",
    yes: 2390,
    no: 3800,
    amt: 2500
  },
  {
    name: "Agriculture",
    yes: 3490,
    no: 4300,
    amt: 2100
  }
];


  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='' title='Feedback'/>

      <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 3,
        left: 2,
        bottom: 5
      }}
    >

<CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="no"
        stroke="#EF1724"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="yes" stroke="#85C441" />
    </LineChart>
      
    </div>
  )
}

export default Feedback