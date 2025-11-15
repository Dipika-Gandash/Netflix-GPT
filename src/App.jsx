import { Outlet } from "react-router-dom";
import Body from "./components/Body";

function App() {
  return (
    <>
      <Body />
      <Outlet />
    
    </>
  );
}

export default App;
