import React, { useState } from 'react'
import FriendStatus from '../commons/IsLoading'

const Hoc = () => {
  return (
    <div className='mb-20 flex justify-center items-center gap-4'>
        <ColorChangeRed cmd={Counter}/>
        <ColorChangegray cmd={Counter}/>
        <ColorChangeyellow cmd={Counter}/>

        <FriendStatus vala={false}></FriendStatus>
    </div>
  )
}

export default Hoc

const ColorChangeRed = (props) => {
    return (
      <div className='bg-red-400 p-12'>
          <props.cmd />
      </div>
    )
  }
const ColorChangegray = (props) => {
    return (
      <div className='bg-gray-400 p-12'>
          <props.cmd />
      </div>
    )
  }
const ColorChangeyellow = (props) => {
    return (
      <div className='bg-yellow-400 p-12'>
          <props.cmd />
      </div>
    )
  }


  const Counter = () => {

   const [counter,setCounter] = useState(0)

    return (
      <div>
          <h1 className='py-4 font-bold text-center'>{counter}</h1>
          <button className='bg-green-400 rounded-md px-2 py-1' onClick={() => setCounter(counter+1)}>Update</button>
      </div>
    )
  }
  