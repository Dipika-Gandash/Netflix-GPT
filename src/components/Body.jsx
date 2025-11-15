import bg from "../assets/background_image.jpg";
import Header from "./Header";
const Body = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-linear-to-b from black">
      <img src={bg} alt="background-image" className="" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.0) 35%, rgba(0,0,0,0.55) 65%, rgba(0,0,0,0.95) 100%)",
        }}
      />
      <Header />
    </div>
  );
};

export default Body;
