import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const Header = () => {
  const [loggedEmployee, setLoggedEmployee] = useState(null)
  const { userData, setLoggedIn, loggedIn } = useContext(AuthContext);
  const data = useContext(AuthContext)
  // console.log(userData)
  useEffect(()=>{
    setLoggedEmployee(data.loggedInEmployeeData)
  },[data,loggedIn])

  const logOut = ()=>{
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("loggedInEmployeeData");
    setLoggedIn((prev) => !prev);
    window.location.reload();
  }

  return (
    <div className='w-full py-5 px-8'>
        <div className='w-full flex justify-between items-center'>
            <div className='text-2xl flex flex-col text-semibold'>Hello <span className='text-4xl text-bold'>{loggedEmployee?.name ? loggedEmployee.name : "Admin" } 👋</span></div>
            <div><button className='px-2 py-1 bg-red-500 rounded-lg font-semibold' onClick={logOut}>Log Out</button></div>
        </div>
    </div>
  )
}

export default Header