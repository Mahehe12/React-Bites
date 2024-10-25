// Assignment 2: Create a background changer in ReactJS

import { useState } from 'react'; 
import './app.css'; 

export default function App() {
  // Step 1: Initialize state for background color
  const [bgColor, setBgColor] = useState('bg-gray-100'); 

  // Step 2: Function to change the background color
  const changeColor = (color) => {
    setBgColor(color); 
  };

  return (
    // Step 3: Create the main container with dynamic background 
    <div className={`flex items-end justify-center h-screen ${bgColor}`}>
      <div className="flex gap-4 p-6 shadow-xl bg-white rounded-lg mb-8">
        <button className="bg-red-500 btn-custom" onClick={() => changeColor('bg-red-500')}>Red</button>
        <button className="bg-yellow-500 btn-custom" onClick={() => changeColor('bg-yellow-500')}>Yellow</button>
        <button className="bg-gray-700 btn-custom" onClick={() => changeColor('bg-gray-700')}>Black</button>
        <button className="bg-purple-900 btn-custom" onClick={() => changeColor('bg-purple-900')}>Purple</button>
        <button className="bg-green-600 btn-custom" onClick={() => changeColor('bg-green-600')}>Green</button>
        <button className="bg-blue-600 btn-custom" onClick={() => changeColor('bg-blue-600')}>Blue</button>
        <button className="bg-orange-600 btn-custom" onClick={() => changeColor('bg-orange-600')}>Default</button>
      </div>
    </div>
  );
}
