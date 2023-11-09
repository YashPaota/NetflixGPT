// import React from "react";
import { LOGO_URL } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import React from "react";
import { useEffect } from "react";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTING_LANGUAGES } from "../utils/languageConstants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
       dispatch(toggleGptSearchView());
  }
  
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }
  useEffect(() => {
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        //user signs in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between ">
      <img className="w-44" src={LOGO_URL} alt="Netflix Logo" />

      {user && (
        <div className="flex p-2">
        {showGptSearch && 
          (  <select className="py-2 px-4 m-2 bg-green-800 rounded-md text-white" onChange={handleLanguageChange}>
            {SUPPORTING_LANGUAGES.map((lang) => 
              <option
                className="bg-green-950" 
                key={lang.identifier} 
                value={lang.identifier}
                >
                {lang.name}
                </option> )}
         </select> )
         }

          <button 
            className="px-2 m-2 py-2 bg-purple-800 text-white rounded-md mr-2"
            onClick={handleGptSearchClick} 
             >
             {showGptSearch ? "Home Page" : "Launch GPT"}
             </button>

          {/* <img className="w-10 h-10  " src={user?.photoURl} alt="usericon" /> */}
          <button
            onClick={handleSignOut}
            className="px-4 m-2 py-2 text-white bg-red-700 rounded-md"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
