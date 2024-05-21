import React from "react";
import ChatCard from "../../Cardcomponents/chatCard";
export default function MessagePage() {
  return (
    <div className="sticky top-0">
      <div className="flex flex-row w-full">
        <div className="hidden md:flex">
          <ul className="menu bg-base-200 rounded-box px-4 border-r-2 h-screen pt-2">
            <li className="mb-4">
              <a className="tooltip tooltip-right" data-tip="Home" href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </a>
            </li>
            <li className="mb-4">
              <a className="tooltip tooltip-right" data-tip="Details" href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </li>
            <li className="mb-4">
              <a className="tooltip tooltip-right" data-tip="Stats" href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full border-r-2 px-2 h-screen overflow-y-scroll pt-1">
          <h1 className="text-2xl font-bold pl-2 text-center md:text-left w-full">
            Chats
          </h1>
          <div className="relative mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="#808080"
              class="w-5 h-5 absolute left-2 top-5 transform -translate-y-1/2 border-r-2"
            >
              <path
                fill-rule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clip-rule="evenodd"
              />
            </svg>
            <input
              type="text"
              placeholder="Search for volunteer opportunities"
              className="rounded-2xl p-2 pl-8 lg:pl-9 w-full sm:w-3/4 md:w-full focus:text-left outline-none bg-gray-100 focus:outline-slate-100 placeholder-gray-500 sm:placeholder-transparent md:placeholder-gray-500 focus:placeholder-transparent focus:pl-10 truncate mb-8"
            />
          </div>
          <div className="w-full">
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
          </div>
        </div>
      </div>
    </div>
  );
}
