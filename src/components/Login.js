import Header from "./Header";
import { BACKGROUND_URL } from "../utils/constants";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //Validate the form data
    // console.log(email.current.value);
    // console.log(password.current.value);
    const Message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(Message);
    // console.log(Message);

    if (Message) return;
    //Now do the SignIn and SignUp Logic

    if (!isSignInForm) {
      //Means SignUp PAge
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          //   console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
          // ..
        });
    } else {
      //Means Sign In Form
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        //   console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />

      <div className="absolute">
        <img src={BACKGROUND_URL} alt="Background" />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black bg-opacity-80 p-12 absolute my-36 mx-auto right-0 left-0 w-3/12 text-white"
      >
        <h1 className="text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 my-4 w-full bg-gray-700"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 my-4 w-full bg-gray-700"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-4 w-full bg-gray-700"
        />
        <p className="text-red-700 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-3 my-6 bg-red-600  rounded-md w-full"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New To Netflix ? Sign Up Now."
            : "Already a member ! Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
