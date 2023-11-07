import Header from "./Header";
import { BACKGROUND_URL } from "../utils/constants";
import { useState } from "react";
const Login = () => {
    const[isSignInForm , setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
       setIsSignInForm(!isSignInForm);
    }


  return (
    <div >
      <Header />
      <div className="absolute">
        <img
          src={BACKGROUND_URL}
          alt="Background"
        />
      </div>
      <form className="bg-black bg-opacity-80 p-12 absolute my-36 mx-auto right-0 left-0 w-3/12 text-white">
        
        <h1 className="text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {isSignInForm && (<input type="text" placeholder="Full Name" className="p-3 my-4 w-full bg-gray-700" />)}

        <input type="text" placeholder="Email Address" className="p-3 my-4 w-full bg-gray-700" />
        <input type="password" placeholder="Password" className="p-3 my-4 w-full bg-gray-700" />
        <button className="p-3 my-6 bg-red-600  rounded-md w-full">{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New To Netflix ? Sign Up Now." : "Already a member ! Sign In Now."}</p>
      </form>
    </div>
  );
};

export default Login;
