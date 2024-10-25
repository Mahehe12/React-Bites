import React, { useEffect, useState } from "react";
import { Users, GitFork, Mail, ExternalLink, Book } from "lucide-react";

const GitHubIcon = () => (
  <svg
    viewBox="0 0 16 16"
    className="w-full h-full"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

const GitHubCard = ({ username }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setUserData(data);
        setLoading(false);
      } catch {
        setError(true);
        setLoading(false);
      }
    };
    fetchData();
  }, [username]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-48 bg-white rounded-lg">
        <div className="w-16 h-16 text-[#800000] animate-pulse">
          <GitHubIcon />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 bg-white p-4 rounded-lg text-center">
        Error fetching GitHub data
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Header with background */}
      <div className="h-24 bg-[#800000] relative">
        {/* Centered GitHub Icon */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-24 h-24">
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-lg border-4 border-white">
            <div className="w-16 h-16 text-[#800000]">
              <GitHubIcon />
            </div>
          </div>
        </div>
      </div>
      
      {/* Profile Content */}
      <div className="px-6 pb-6">
        {/* Profile Info with adjusted margin to account for centered icon */}
        <div className="mt-12">
          <div className="space-y-1 text-center">
            <h2 className="text-2xl font-bold text-gray-900">{userData.name || userData.login}</h2>
            <p className="text-gray-600">@{userData.login}</p>
            {userData.bio && (
              <p className="text-gray-700 mt-2">{userData.bio}</p>
            )}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mt-6 text-center">
            <div className="flex flex-col items-center p-2 rounded-lg bg-gray-50">
              <Book className="w-5 h-5 text-[#800000] mb-1" />
              <span className="font-semibold text-gray-900">{userData.public_repos}</span>
              <span className="text-xs text-gray-600">Repositories</span>
            </div>
            <div className="flex flex-col items-center p-2 rounded-lg bg-gray-50">
              <Users className="w-5 h-5 text-[#800000] mb-1" />
              <span className="font-semibold text-gray-900">{userData.followers}</span>
              <span className="text-xs text-gray-600">Followers</span>
            </div>
            <div className="flex flex-col items-center p-2 rounded-lg bg-gray-50">
              <GitFork className="w-5 h-5 text-[#800000] mb-1" />
              <span className="font-semibold text-gray-900">{userData.following}</span>
              <span className="text-xs text-gray-600">Following</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-6 space-y-2">
            {userData.email && (
              <div className="flex items-center justify-center text-gray-600">
                <Mail className="w-4 h-4 mr-2 text-[#800000]" />
                <span>{userData.email}</span>
              </div>
            )}
            <a
              href={userData.html_url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center text-[#800000] hover:text-[#600000] transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              <span>View GitHub Profile</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubCard;