import React from 'react';

const Home = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img 
          src="./bg.png"
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4">
        

        {/* Welcome Text */}
        <div className="flex flex-col items-center justify-center h-[80vh] text-center">
          <h1 className="text-white text-5xl md:text-7xl font-bold mb-6">
            Welcome to Netflix
          </h1>
          <p className="text-white text-xl md:text-2xl max-w-2xl">
            Watch anywhere. Cancel anytime.
          </p>
          <button className="mt-8 bg-red-600 text-white px-8 py-4 text-xl rounded hover:bg-red-700 transition-colors duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;