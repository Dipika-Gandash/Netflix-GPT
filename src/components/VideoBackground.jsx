import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ id }) => {
  useMovieTrailer(id);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div className="relative w-full h-screen overflow-hidden z-20">
      <iframe
        className="absolute top-1/2 left-1/2 w-[140%] h-[140%] -translate-x-1/2 -translate-y-1/2"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1`}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/60"></div>
    </div>
  );
};

export default VideoBackground;
