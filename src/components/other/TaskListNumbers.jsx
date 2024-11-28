import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const TaskListNumbers = () => {
    const [loggedEmployee, setLoggedEmployee] = useState(null)
  const data = useContext(AuthContext)
  // console.log(data)

  useEffect(()=>{
    setLoggedEmployee(data.loggedInEmployeeData)
  },[data])

  return (
    <div className='w-full p-5 flex justify-between gap-4'>
        <div className='bg-green-500 rounded-lg px-6 py-8 w-[45%]'>
            <h1 className='text-4xl'>{data.loggedInEmployeeData?.taskCounts?.active}</h1>
            <h2 className='text-3xl'>Active</h2>
        </div>
        <div className='bg-blue-500 rounded-lg px-6 py-8 w-[45%]'>
        <h1 className='text-4xl'>{data.loggedInEmployeeData?.taskCounts?.newTask}</h1>
            <h2 className='text-3xl'>New task</h2>
        </div>
        <div className='bg-purple-500 rounded-lg px-6 py-8 w-[45%]'>
        <h1 className='text-4xl'>{data.loggedInEmployeeData?.taskCounts?.completed}</h1>
            <h2 className='text-3xl'>Completed</h2>
        </div>
        <div className='bg-red-500 rounded-lg px-6 py-8 w-[45%]'>
        <h1 className='text-4xl'>{data.loggedInEmployeeData?.taskCounts?.failed}</h1>
            <h2 className='text-3xl'>Failed</h2>
        </div>
    </div>
  )
}

export default TaskListNumbers