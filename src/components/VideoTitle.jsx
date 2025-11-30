const VideoTitle = ({ original_title, overview }) => {
  return (
    <div className="mx-5 mt-48">
      <h1 className="text-4xl font-bold mb-4">{original_title}</h1>
      <p className="text-gray-300 w-2/4">{overview}</p>
      <div className="flex gap-4 mt-4">
        <button className=" bg-white text-black text-xl px-4 py-1 rounded-md cursor-pointer">⏵Play</button>
        <button className=" bg-gray-800 text-white text-xl px-4 py-1 rounded-md cursor-pointer">
          {" "}
          🛈 More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
