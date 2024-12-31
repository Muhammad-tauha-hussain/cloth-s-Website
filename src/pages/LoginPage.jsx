  import React, { useState } from "react";
  import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
  } from "firebase/auth";
  import { auth } from "../firebase/firebaseConfig"; 
  import { useNavigate } from "react-router-dom";

  const AuthPage = () => {
    const navigate = useNavigate()
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
        if (isSignUp) {
          await createUserWithEmailAndPassword(auth, email, password);
          navigate('/')
        } else {
          await signInWithEmailAndPassword(auth, email, password);
          navigate('/')
        }
        alert("Authentication successful!");
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };

    const handleGoogleSignIn = async () => {
      const provider = new GoogleAuthProvider();
      try {
        await signInWithPopup(auth, provider);
        navigate('/')
        alert("Google Sign-In successful!");
      } catch (error) {
        alert(error.message);
      }
    };

    const handleToggle = () => {
      setIsSignUp((prevState) => !prevState);
    };

    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
          {/* Image Section */}
          <div className="relative md:w-1/2 w-full h-64 md:h-auto bg-cover bg-center"
            style={{
              backgroundImage: "url('https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
            }}
          ></div>

          {/* Form Section */}
          <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
              {isSignUp ? "Create an Account" : "Welcome Back"}
            </h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Enter your password"
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                disabled={loading}
                className={`${loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
                  } text-white py-2 rounded-md font-semibold transition-all duration-200`}
              >
                {loading ? "Processing..." : isSignUp ? "Sign Up" : "Login"}
              </button>
            </form>

            <div className="mt-4 flex items-center justify-between text-sm">
              <p>
                {isSignUp
                  ? "Already have an account?"
                  : "Don't have an account?"}
                <span
                  onClick={handleToggle}
                  className="text-blue-500 cursor-pointer ml-1 font-semibold"
                >
                  {isSignUp ? "Login" : "Sign Up"}
                </span>
              </p>
              <p className="text-gray-500 underline cursor-pointer">
                Forgot Password?
              </p>
            </div>

            <div className="relative my-4 text-center">
              <div className="absolute left-0 right-0 border-t border-gray-300 top-1/2"></div>
              <span className="relative bg-white px-2 text-gray-500">OR</span>
            </div>

            <button
              onClick={handleGoogleSignIn}
              type="button"
              className="bg-red-500 text-white py-2 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-red-600 transition-all duration-200"
            >
              <span>Sign {isSignUp ? "Up" : "In"} with Google</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default AuthPage;
