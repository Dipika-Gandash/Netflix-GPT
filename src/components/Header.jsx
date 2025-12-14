import bg from "../assets/logo1.png";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useState } from "react";
import { signOut } from "firebase/auth";
import defaultProfile from "../assets/defaultProfile.png";
import {toggleGPTSearchView} from "../utils/gptSlice.js"
import { useDispatch } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user.userInfo);
  const [openMenu, setOpenMenu] = useState(false);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth).catch(console.log);
  }

  const handleGPTSearchClick = () => {
    dispatch(toggleGPTSearchView());
  }

  return (
    <div className="fixed top-0 left-0 w-full z-50 
      bg-gradient-to-b from-black/80 via-black/40 to-transparent
      px-10 py-6">
      <img src={bg} alt="background" className="w-48 absolute top-5 left-16" />

      {user && (
        <>
        <button className="absolute px-4 py-3 bg-red-700 text-white font-bold cursor-pointer rounded-sm top-5 right-28 hover:bg-red-800" onClick={handleGPTSearchClick}>GPT Search</button>
        <img
          src={defaultProfile}
          alt="default Profile"
          className="w-12 h-12 rounded-full cursor-pointer absolute top-5 right-10"
          onClick={() => setOpenMenu(!openMenu)}
        />
        </>
        
      )}

     {openMenu && user && (
        <div className="absolute right-10 top-20 bg-gray-900 text-white w-52 p-4 rounded-lg shadow-lg z-20">
          <div className="flex items-center gap-3 mb-4">
            <img
              src={defaultProfile}
              alt="user"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">{user.name}</p>
              <p className="text-gray-400 text-sm">{user.email}</p>
            </div>
          </div>

          <button
            onClick={handleSignOut}
            className="w-full bg-red-600 hover:bg-red-700 transition p-2 rounded"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
