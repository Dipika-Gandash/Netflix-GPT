import { useState } from "react";
import { Link } from "react-router-dom";

const AuthPage = ({mode}) => {
  const isSignIn = mode === "signIn";
  
  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                        w-[350px] p-6 bg-black/80 rounded-lg text-white"
    >
      <h1 className="text-4xl font-bold mb-6">{isSignIn ? "Sign In" : "Sign Up"}</h1>

      <form className="flex flex-col gap-6">
       {!isSignIn && <input
          type="text"
          placeholder="Enter your name"
          className="p-2.5 rounded bg-gray-800/70 outline-none focus:ring-2 focus:ring-red-500"
        /> }
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2.5 rounded bg-gray-800/70 outline-none focus:ring-2 focus:ring-red-500"
        /> 
        <input
          type="password"
          placeholder="Enter your password"
          className="p-2.5 rounded bg-gray-800/70 outline-none focus:ring-2 focus:ring-red-500"
        />

        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 transition p-2 rounded font-semibold"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
       {
        isSignIn ? (
          <p>Already have an account ? {" "} <Link to="/signUp">Sign Up</Link></p>
        ) :(
          <p>New to Netflix ?{" "} <Link to="/signIn">Sign In</Link></p>
        )
      }
      </form>
    </div>
  );
};

export default AuthPage;
