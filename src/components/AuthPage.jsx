import { useState, useRef , useEffect } from "react";
import { Link } from "react-router-dom";
import { validateForm } from "../utils/Validation";

const AuthPage = ({ mode }) => {
  const isSignIn = mode === "signIn";
  const name = useRef("");
  const email = useRef("");
  const password = useRef("");
  const [errorMessage, setErrorMessage] = useState({});

  useEffect(() => {
  setErrorMessage({}); 

  if (name.current) name.current.value = "";
  if (email.current) email.current.value = "";
  if (password.current) password.current.value = "";
}, [mode]);

  const handleButtonClick = (e) => {
    e.preventDefault();

    const error = validateForm({
      name: isSignIn ? undefined : name.current.value,
      email: email.current.value,
      password: password.current.value,
    });
    setErrorMessage(error);
  };

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                        w-[350px] p-6 bg-black/80 rounded-lg text-white"
    >
      <h1 className="text-4xl font-bold mb-6 py-3">
        {isSignIn ? "Sign In" : "Sign Up"}
      </h1>

      <form className="flex flex-col gap-6" onSubmit={handleButtonClick}>
        {!isSignIn && (
          <div className="flex flex-col">
            <input
              ref={name}
              type="text"
              placeholder="Enter your name"
              className="p-2.5 rounded bg-gray-800/70 outline-none focus:ring-2 focus:ring-red-500"
            />
            {errorMessage.name && (
              <p className="text-red-500 text-bold mt-1">{errorMessage.name}</p>
            )}
          </div>
        )}
        <div className="flex flex-col">
          <input
            ref={email}
            type="email"
            placeholder="Enter your email"
            className="p-2.5 rounded bg-gray-800/70 outline-none focus:ring-2 focus:ring-red-500"
          />
          {errorMessage.email && (
            <p className="text-red-500 text-bold mt-1">{errorMessage.email}</p>
          )}
        </div>

        <div className="flex flex-col">
          <input
            ref={password}
            type="password"
            placeholder="Enter your password"
            className="p-2.5 rounded bg-gray-800/70 outline-none focus:ring-2 focus:ring-red-500"
          />
          {errorMessage.password && (
            <p className="text-red-500 text-bold mt-1">{errorMessage.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 transition p-2 rounded font-semibold cursor-pointer"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        {isSignIn ? (
          <p>
            Already have an account ? <Link to="/signUp">Sign Up</Link>
          </p>
        ) : (
          <p>
            New to Netflix ? <Link to="/signIn">Sign In</Link>
          </p>
        )}
      </form>
    </div>
  );
};

export default AuthPage;
