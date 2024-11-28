import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setLoggedIn} = useContext(AuthContext)

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    
    setEmail("")
    setPassword("")
  };
  
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="border-2 border-emerald-500 rounded-md">
        <form
          action=""
          className="flex justify-center items-center flex-col gap-3 p-5 "
          onSubmit={(e) => submitHandler(e)}
        >
          <input
            required
            type="email"
            placeholder="Enter your Email"
            className="px-3 py-1 outline-none text-white rounded-lg bg-zinc-900 border-emerald-500 border-2 placeholder:text-zinc-600"
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
          />
          <input
            required
            type="password"
            placeholder="Enter password"
            className="px-3 py-1 outline-none text-white rounded-lg border-emerald-500 border-2 bg-zinc-900 placeholder:text-zinc-600"
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
          />
          <button
            type="submit"
            className="px-5 hover:bg-blue-600 py-1 outline-none bg-blue-700 rounded-xl"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
