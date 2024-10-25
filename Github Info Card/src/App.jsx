import React from 'react';
import './App.css';
import GitHubCard from './Components/GitHubCard';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="relative inline-block">
            <span className="text-4xl font-bold text-[#800000] relative z-10">
              GitHub Info Card
            </span>
          </h1>
        </div>

        <GitHubCard username="Mahehe12" />

        <footer className="mt-12 text-center text-gray-600 pb-6">
          <p className="flex items-center justify-center gap-2">
            Built with 
            <span className="text-[#800000]">React</span> 
            and 
            <span className="text-[#800000]">GitHub API</span>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;