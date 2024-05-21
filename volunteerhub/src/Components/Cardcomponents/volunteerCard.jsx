import React, { useState } from "react";

export default function VolunteerCard() {
  const [isLiked, setIsLiked] = useState(100);
  const increment = () => {
    setIsLiked(isLiked + 1);
  };
  return (
    <div className="flex flex-col p-6 w-full space-y-6 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800 mb-4">
      <div className="flex space-x-4">
        <img
          alt=""
          src="https://source.unsplash.com/100x100/?portrait"
          className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
        />
        <div className="flex flex-col space-y-1">
          <a
            rel="noopener noreferrer"
            href="volunteerpage"
            className="text-sm font-semibold"
          >
            Leroy Jenkins
          </a>
          <span className="text-xs dark:text-gray-600">4 hours ago</span>
        </div>
      </div>
      <a href="/volunteerpage">
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <img
            src="/images/education_Cover.webp"
            alt=""
            className="object-cover h-40 dark:bg-gray-500 rounded-md self-center w-full"
          />
          <div className="flex flex-col ml-4">
            <h2 className="mb-1 text-2xl font-semibold text-center md:text-left">
              Nam cu platonem posidonium sanctus debitis te
            </h2>
            <p className="text-sm dark:text-gray-600 w-full md:w-11/12 h-40 md:h-fit overflow-hidden indent-5">
              Eu qualisque aliquando mel, id lorem detraxit nec, ad elit minimum
              pri. Illum ipsum detracto ne cum. Mundi nemore te ius, vim ad
              illud atqui apeirian... Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Excepturi odio voluptas quae delectus tempore
              nobis aut error recusandae, ipsam aliquam corporis eligendi totam
              esse in? Nostrum consectetur temporibus natus tempore!
            </p>
            <p className="text-blue-600 dark:text-blue-400 hover:underline w-fit pt-5">
              Read More
            </p>
          </div>
        </div>
      </a>
      <div className="flex flex-wrap justify-between">
        <div className="space-x-2">
          <button
            aria-label="Share this post"
            type="button"
            className="p-2 text-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 dark:text-default-600 hover:fill-current pt-0.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
              />
            </svg>
          </button>
          <button aria-label="Bookmark this post" type="button" className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 dark:text-default-600 hover:fill-current pt-0.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
              />
            </svg>
          </button>
        </div>
        <div className="flex space-x-2 text-sm dark:text-gray-600">
          <button type="button" className="flex items-center p-1 space-x-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 dark:text-default-600 hover:fill-current pt-0.5 hover:stroke-neutral-50 hover:w-6 hover:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              />
            </svg>

            <span>30</span>
          </button>
          <button
            type="button"
            className="flex items-center p-1 space-x-1.5"
            onClick={increment}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 dark:text-default-600 hover:fill-current pt-0.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
              />
            </svg>
            {isLiked}
          </button>
        </div>
      </div>
    </div>
  );
}
