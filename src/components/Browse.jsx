import Header from "./Header";

const Browse = () => {
  return (
    <div className="relative w-full h-screen bg-[rgb(20,20,20)]">
      
      {/* Dark gradient overlay (Netflix style) */}
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
       
      </div>
    </div>
  );
};

export default Browse;
