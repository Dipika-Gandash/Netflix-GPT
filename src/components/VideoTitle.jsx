const VideoTitle = ({ original_title, overview }) => {
  return (
    <div className="absolute top-40 left-8 z-40 text-white w-[45%]  bg-gradient-to-r from-black/60 via-black/20 to-transparent
  p-6">
      <h1 className="text-5xl font-bold mb-4">{original_title}</h1>

      <p className="text-gray-200 mb-6">{overview}</p>

      <div className="flex gap-4">
        <button className="bg-white text-black text-xl px-5 py-2 rounded-md">
          ⏵ Play
        </button>

        <button className="bg-gray-800/80 text-white text-xl px-5 py-2 rounded-md">
          🛈 More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
