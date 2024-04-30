import React, { useState } from "react";

export default function VolunteerCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-gray-200 p-4 md:p-8 rounded-lg w-full flex flex-col md:flex-row mb-4 shadow-md">
      <img src="/images/volunteer_1.jpg" alt="volunteer img" className="w-full md:w-72 h-auto rounded-lg mb-4 md:mb-0" />
      <div className="flex flex-col justify-center md:ml-8">
        <div className="flex items-center mb-2">
          <h2 className="text-xl md:text-2xl font-bold mr-auto">
            Leadership Residency at the Harpswell Foundation
          </h2>
          <div className="flex flex-row relative right-auto left-0 lg:-top-5 lg:left-10">
            {isHovered ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <path
                  fillRule="evenodd"
                  d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                />
              </svg>
            )}
          </div>
        </div>
        <ul className="mt-2">
          <li className="flex flex-row">Location: Phnom Penh</li>
          <li>Category: Education</li>
          <li>Duration: 3-4 hours</li>
          <li>Date: 2024-5-10</li>
        </ul>
        <p className="text-gray-400 mt-2">Posted: 1 day ago</p>
      </div>
    </div>
  );
}
