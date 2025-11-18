import bg from "../assets/logo1.png";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useState } from "react";
import { signOut } from "firebase/auth";
import defaultProfile from "../assets/defaultProfile.png";

const Header = () => {
  const user = useSelector((store) => store.user.userInfo);
  const [openMenu, setOpenMenu] = useState(false);

  const handleSignOut = () => {
    signOut(auth).catch(console.log);
  }

  return (
    <div>
      <img src={bg} alt="background" className="w-44 absolute top-5 left-15" />

      {user && (
        <img
          src={defaultProfile}
          alt="default Profile"
          className="w-12 h-12 rounded-full cursor-pointer absolute top-5 right-10"
          onClick={() => setOpenMenu(!openMenu)}
        />
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
