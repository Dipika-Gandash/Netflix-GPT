const VideoTitle = ({ original_title, overview }) => {
  return (
    <div className="absolute top-[30vh] left-10 z-30 max-w-xl 
                    text-white p-6 
                    bg-gradient-to-r from-black/70 via-black/30 to-transparent
                    rounded-lg">

      <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">{original_title}</h1>

      <p className="text-gray-200 mb-6 drop-shadow-lg">{overview}</p>

      <div className="flex gap-4">
        <button className="bg-white text-black text-xl px-5 py-2 rounded-md cursor-pointer">
          ⏵ Play
        </button>

        <button className="bg-gray-800/70 text-white text-xl px-5 py-2 rounded-md cursor-pointer">
          🛈 More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;