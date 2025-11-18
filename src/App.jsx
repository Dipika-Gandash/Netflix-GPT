import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";
import { useNavigate } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
