import React from "react";
import { LOGO_URL } from "../utils/constants";
import {signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");

    }).catch((error) => {
      navigate("/error");
    });
  }
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between ">
      <img
        className="w-44"
        src={LOGO_URL}
        alt="Netflix Logo"
      />
      <div className="flex p-2">
        <img  className="w-10 h-10  " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ3SFVmXoYNHl2D22fjIEAwMuEqrbDYiUUwsWi6-K0AEnh9QZzAhgaOayZ6hFG4Eh_1m4&usqp=CAU" alt="usericon" />
         <button onClick = {handleSignOut} className="ml-2 mb-3 text-white font-bold text-center">Sign Out</button>
      </div>
    </div>
  );
};

export default Header;
