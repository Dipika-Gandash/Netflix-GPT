import bg from "../assets/background_image.jpg";
import Header from "./Header";
import React from "react"

const Body = () => {
  return (
     <div
      className="relative w-full min-h-[100svh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

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
