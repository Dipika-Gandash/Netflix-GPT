import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div className="relative w-full h-screen bg-[rgb(20,20,20)]">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.8) 90%)",
        }}
      />

      {/* Header on top of overlay */}
      <div className="relative">
        <Header />
      </div>

      {/* Page content */}
      <div className="relative z-10 text-white p-6">
        <MainContainer />
        <SecondaryContainer />
      </div>
    </div>
  );
};

export default Browse;
