import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/localStorage';
export const  AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [userData, setUserData] = useState(null)
  const [loggedInEmployeeData, setLoggedInEmployeeData] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const {employees, admin} = getLocalStorage()
    setUserData({employees,admin})
    setLoggedInEmployeeData(JSON.parse(localStorage.getItem("loggedInEmployeeData")))
  }, [loggedIn])
  return (
    <div>
      <AuthContext.Provider value={{userData,setUserData,loggedInEmployeeData,loggedIn,setLoggedIn}}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider