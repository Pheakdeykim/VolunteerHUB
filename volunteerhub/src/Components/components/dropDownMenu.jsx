import { LogOut } from "lucide-react";
import React from "react";

export default function DropdownMenu() {
  return (
    <div>
      <button
        id="dropdownMenuIconButton"
        data-dropdown-toggle="dropdownDots"
        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg  hover:bg-indigo-50 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        type="button"
      >
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 4 15"
        >
          <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
        </svg>
      </button>

      <div
        id="dropdownDots"
        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 p-2"
      >
        <ul
          class="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownMenuIconButton"
        >
          <li className="">
            <a
              href="/login"
              class="flex flex-row pl-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 p-4 dark:hover:text-white rounded-lg items-center"
            >
              <LogOut className="mr-3" />
              Log out
            </a>
          </li>
          {/* <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Earnings
            </a>
          </li> */}
        </ul>
        {/* <div class="py-2">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Separated link
          </a>
        </div> */}
      </div>
    </div>
  );
}
