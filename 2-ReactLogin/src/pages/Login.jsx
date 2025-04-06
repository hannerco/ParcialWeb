import logo from '../assets/logo.svg'
import { useState } from 'react';

function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rememberCheck, setRememberCheck] = useState(false);
  
    const handleSignIn = () => {
      console.log({
        username,
        password,
        rememberCheck,
      });
    };

    return(
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-[#e6f7ff] px-4 overflow-hidden">

        <div className="absolute top-4 left-25 w-[220px] h-[220px]  bg-[#66c7ff] rounded-full -translate-x-1/2 -translate-y-1/2 z-10" />
        <div className="absolute top-10 right-2 w-[320px] h-[320px] bg-indigo-400 rounded-full translate-x-1/3 -translate-y-1/2 z-0" />
  

        <div className="flex justify-center items-center flex-col w-full max-w-sm p-2 z-20 mt-40">

          <div className="flex justify-center mb-2 h-38 w-38">
            <img src={logo}/>
          </div>
  

          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            className="w-60 mb-5 px-4 py-2.5 rounded-xl bg-[#7377ff] text-white placeholder-white text-center text-lg"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-60 mb-4 px-4 py-2.5 rounded-xl bg-[#7377ff] text-white placeholder-white text-center text-lg"
          />
  

          <div className="flex justify-center items-center mb-4">
            <input type="checkbox" checked={rememberCheck} onChange={(e) => setRememberCheck(e.target.checked)} className="mr-2 accent-sky-400 scale-170" />
            <label className="text-sky-500 mb-1 ml-3">Remember me</label>
          </div>
  

          <button onClick={handleSignIn} className="w-40 mt-8 bg-sky-500 text-white py-2.5 rounded-xl mb-2 hover:bg-sky-600 transition text-lg">
            Sign in
          </button>
  

          <p className="text-center text-sm mt-1 text-sky-500 cursor-pointer">Forgot password?</p>
        </div>
    </div>
    )
}

export default Login