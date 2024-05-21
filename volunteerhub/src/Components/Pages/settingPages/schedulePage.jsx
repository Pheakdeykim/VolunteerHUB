import React from "react";
import { Link } from "react-router-dom";
import SideBar from "../../layouts/sideBar";

export default function SchedulePage() {
  const sm = window.screen.width;

  return (
    <div className="flex flex-row">
      <div className={`${sm < 836 ? "fixed z-20" : ""}`}>
        <SideBar />
      </div>
      <div className={` md:w-full flex flex-col items-center justify-center h-screen ${sm < 836 ? "absolute top-0 left-20" : ""}`}>
      <div className="text-gray-300">
        <h1 className=" text-center text-5xl md:text-9xl w-full md:w-1/2">Coming</h1>
        <p className=" text-5xl md:text-9xl text-center">soon</p>
        <p className="text-center mt-4 text-lg md:text-xl">
          The page you are looking for is under development.
        </p>
      </div>
      <div className="text-indigo-600 duration-150 hover:text-indigo-400 font-medium inline-flex items-center gap-x-1 mt-5">
        <Link to="/profile">
          Go back
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 inline"
          >
            <path
              fillRule="evenodd"
              d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
    </div>
  );
}
