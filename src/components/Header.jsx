import bg from "../assets/logo1.png";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useState } from "react";
import { signOut } from "firebase/auth";
import defaultProfile from "../assets/defaultProfile.png";
import { toggleGeminiSearchView } from "../utils/geminiSlice.js";
import { useDispatch } from "react-redux";
import { SUPPORTED_LANGUAGES } from "../utils/constants.js";
import { changeLanguage } from "../utils/configSlice.js";

const Header = () => {
  const user = useSelector((store) => store.user.userInfo);
  const [openMenu, setOpenMenu] = useState(false);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth).catch(console.log);
  };

  const handleGeminiSearchClick = () => {
    dispatch(toggleGeminiSearchView());
  };

  const showGeminiSearch = useSelector((store) => store.gemini.showGeminiSearch);
  const selectedLang = useSelector((store) => store.config.lang);

  return (
    <div
  className="
    fixed top-0 left-0 w-full z-50
    bg-gradient-to-b from-black/80 via-black/40 to-transparent
    px-4 sm:px-6 md:px-10
    py-3 sm:py-4 md:py-6
  "
>
  <div className="flex items-center justify-between">
    <img
      src={bg}
      alt="Netflix Nova"
      className="w-28 sm:w-32 md:w-40 lg:w-48"
    />

    {user && (
      <div className="flex items-center gap-2 sm:gap-4">
        {showGeminiSearch && (
          <select
            className="
              bg-black text-white px-2 py-1
              rounded-md border border-gray-500
            "
            value={selectedLang}
            onChange={(e) => dispatch(changeLanguage(e.target.value))}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.name} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
        )}

        <button
          onClick={handleGeminiSearchClick}
          className="
            text-md sm:text-base
            px-3 py-1.5 sm:px-4 sm:py-2
            bg-red-700 text-white font-semibold
            rounded-md hover:bg-red-800 transition
          "
        >
          {showGeminiSearch ? "Home" : "AI Search"}
        </button>

        <img
          src={defaultProfile}
          alt="Profile"
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full cursor-pointer"
          onClick={() => setOpenMenu(!openMenu)}
        />
      </div>
    )}
  </div>

  {openMenu && user && (
    <div
      className="
        absolute right-4 sm:right-6 md:right-10
        top-16 sm:top-20
        bg-gray-900 text-white
        w-56 p-4 rounded-lg shadow-lg
      "
    >
      <div className="flex items-center gap-3 mb-4">
        <img src={defaultProfile} className="w-10 h-10 rounded-full" />
        <div>
          <p className="font-semibold">{user.name}</p>
          <p className="text-gray-400 text-sm">{user.email}</p>
        </div>
      </div>

      <button
        onClick={handleSignOut}
        className="w-full bg-red-600 hover:bg-red-700 p-2 rounded"
      >
        Sign Out
      </button>
    </div>
  )}
</div>

  );
};

export default Header;
