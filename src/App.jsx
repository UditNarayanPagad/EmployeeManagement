import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashborad/EmployeeDashboard';
import AdminDashboard from './components/Dashborad/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const { userData, setLoggedIn, loggedIn } = useContext(AuthContext);
  // console.log(userData)
  useEffect(() => {
    setLocalStorage();
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser(loggedInUser.role);
    }
  }, [loggedIn]);

  const handleLogin = (email, password) => {
    const loggedInEmployeeData = userData?.employees?.find(
      (e) => e.email === email && e.password === password
    );

    if (email === "admin@me.com" && password === "123") {
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      setUser("admin");
    } else if (loggedInEmployeeData) {
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee" }));
      localStorage.setItem("loggedInEmployeeData", JSON.stringify(loggedInEmployeeData));
      setUser("employee");
      setLoggedIn((prev) => !prev);
    } else {
      alert("Invalid Input");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : null}
      {user === "admin" ? <AdminDashboard /> : null}
      {user === "employee" ? <EmployeeDashboard /> : null}
    </>
  );
};

export default App;
