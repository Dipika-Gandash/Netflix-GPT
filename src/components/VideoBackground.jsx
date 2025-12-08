import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ id }) => {
  useMovieTrailer(id);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div className="absolute top-0 left-0 w-full h-screen z-20 overflow-hidden">
      <iframe
        className="w-full aspect-video pointer-events-none"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&disablekb=1&fs=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>

      {/* Optional dark overlay so text is more readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-30"></div>
    </div>
  );
};

export default VideoBackground;
