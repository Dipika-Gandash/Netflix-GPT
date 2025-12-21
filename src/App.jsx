import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "./utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";
import { useNavigate } from "react-router-dom";
import Loader from "./components/Loader.jsx"

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // user is signed in
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            name: user.displayName,
          })
        );

        navigate("/browse");
      } else {
        // user is signed out
      dispatch(removeUser());
       navigate("/signIn");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
