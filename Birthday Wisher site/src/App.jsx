import React, { useState } from 'react';
import Card1 from './Components/Card1';
import Card2 from './Components/Card2';

const App = () => {
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState({ name: '', age: '' });

  const handleChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    setClicked(!clicked);
  };

  const handleReset = () => {
    setClicked(false);
    setData({ name: '', age: '' });
  };

  return (
    <div className="flex items-center justify-center h-screen relative">
      {clicked && (
        <button
          onClick={handleReset}
          className="absolute font-bold underline text-white left-8 top-20"
        >
          Go Back
        </button>
      )}
      
      <img
        src="https://images.unsplash.com/photo-1645963780567-b262d848c2a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="absolute object-cover z-[-10] opacity-70 w-screen h-screen"
        alt="Background"
      />

      {!clicked ? (
        <div className="flex items-center justify-center w-full">
          <div className="flex flex-col items-center justify-center w-[50%] gap-6 py-12 bg-black bg-opacity-70 shadow-xl shadow-black rounded-xl">
            <h2 className="text-4xl font-bold text-white mb-6">Enter Details</h2>
            <div className="flex flex-col w-[70%] gap-4">
              <input
                type="text"
                name="name"
                onChange={handleChange}
                className="border border-gray-300 w-full p-3 rounded-md bg-white text-black placeholder-gray-500"
                placeholder="Enter name"
              />
              <input
                type="number"
                name="age"
                onChange={handleChange}
                className="border border-gray-300 w-full p-3 rounded-md bg-white text-black placeholder-gray-500"
                placeholder="Enter age"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="mt-4 px-6 py-2 text-lg font-semibold text-white bg-blue-500 hover:bg-blue-700 rounded-lg"
            >
              Submit
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center gap-6 w-full">
          <Card1 name={data.name} age={data.age} />
          <Card2 name={data.name} age={data.age} />
        </div>
      )}
    </div>
  );
};

export default App;
