import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const { userData, setLoggedIn, loggedIn } = useContext(AuthContext);
  // console.log(userData)
  return (
    <div className='mt-3 px-3 gap-2'>
      <div className='w-full bg-yellow-700 flex items-center justify-between mb-2 px-4 py-2 rounded-2xl text-lg text-center'>
            <h2 className='font-semibold w-1/5'>Name</h2>
            <h2 className='font-semibold w-1/5'>New task</h2>
            <h2 className='font-semibold w-1/5'>Completed</h2>
            <h2 className='font-semibold w-1/5'>Active</h2>
            <h2 className='font-semibold w-1/5'>Failed</h2>
        </div>
      <div id='adminTask' className='w-full flex flex-col h-40 overflow-auto gap-1'>
        {userData.employees.map((emp,indx)=>{
          return <div key={indx} className='w-full border-2 border-yellow-300 flex items-center justify-between text-center px-4 py-2 rounded-2xl text-lg'>
          <h2 className='font-semibold w-1/5'>{emp.name}</h2>
          <h2 className='font-semibold w-1/5'>{emp.taskCounts.newTask}</h2>
          <h2 className='font-semibold w-1/5'>{emp.taskCounts.completed}</h2>
          <h2 className='font-semibold w-1/5'>{emp.taskCounts.active}</h2>
          <h2 className='font-semibold w-1/5'>{emp.taskCounts.failed}</h2>
      </div>
        })}
    </div>
    </div>
  )
}

export default AllTask