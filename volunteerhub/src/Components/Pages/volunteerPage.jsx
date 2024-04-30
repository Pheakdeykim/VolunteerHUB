import React, { useState, useEffect } from "react";
import NavBar from "../layouts/navBar";
import Footer from "../layouts/footer";
import VolunteerCard from "../Cardcomponents/volunteerCard";

export default function GetStartPage() {
  const [showFilters, setShowFilters] = useState(true); // Show filters by default on medium and large screens
  const [showFilterButton, setShowFilterButton] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setShowFilters(false); // Collapse filters on small screens
        setShowFilterButton(true); // Show filter button on small screens
      } else {
        setShowFilters(true); // Show filters on medium and large screens
        setShowFilterButton(false); // Hide filter button on medium and large screens
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check for window size
    handleResize();

    // Cleanup the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div>
      <NavBar />
      <div className="flex justify-center mt-10">
        <div className="flex flex-col md:flex-row md:w-full lg:w-3/4 mx-4 bg-gray-100 rounded-lg shadow-xl pb-10">
          <div
            className={`w-full md:w-1/4 ${
              showFilters ? "block" : "hidden"
            } md:block`}
          >
            {/* Set filter section to sticky */}
            <div className="p-4 flex flex-col justify-center sticky top-12">
              <h1
                className="text-2xl font-bold cursor-pointer"
                onClick={toggleFilters}
              >
                Filter
              </h1>
              {showFilters && (
                <div>
                  <div className="mt-4">
                    <h2 className="text-lg font-bold">Location</h2>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded mt-2"
                      placeholder="Enter location"
                    />
                  </div>
                  <div className="mt-4">
                    <h2 className="text-lg font-bold">Category</h2>
                    <select className="w-full p-2 border border-gray-300 rounded mt-2">
                      <option>Education</option>
                      <option>Health</option>
                      <option>Environment</option>
                      <option>Animal</option>
                      <option>Others</option>
                    </select>
                  </div>
                  <div className="mt-4">
                    <h2 className="text-lg font-bold">Duration</h2>
                    <select className="w-full p-2 border border-gray-300 rounded mt-2">
                      <option>1-2 hours</option>
                      <option>3-4 hours</option>
                      <option>5-6 hours</option>
                      <option>7-8 hours</option>
                      <option>9-10 hours</option>
                    </select>
                  </div>
                  <div className="mt-4">
                    <h2 className="text-lg font-bold">Date</h2>
                    <input
                      type="date"
                      className="w-full p-2 border border-gray-300 rounded mt-2"
                    />
                  </div>
                  <div className="mt-4">
                    <button className="w-full bg-blue-500 text-white p-2 rounded">
                      Apply
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="hidden md:block pl-10"></div>
          <div className="flex flex-col w-full">
            <div className="w-full md:w-3/4 lg:w-full p-4 md:border-l-2 mt-12 border-gray-400">
              <div className="flex justify-center">
                <h1 className="text-2xl font-bold mb-5">Volunteer List</h1>
              </div>
              {/* Show/Hide Filter BTN */}
              <div
                className={`w-full md:w-1/4 ${
                  showFilterButton ? "block" : "hidden"
                } md:hidden mb-10`}
              >
                <button
                  className="text-lg font-bold mt-4 bg-blue-500 text-white p-2 rounded"
                  onClick={toggleFilters}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 inline-block mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                    />
                  </svg>
                  Filter
                </button>
              </div>
              <div className="flex flex-col">
                <VolunteerCard />
                <VolunteerCard />
                <VolunteerCard />
                <VolunteerCard />
                <VolunteerCard />
                <VolunteerCard />
                <VolunteerCard />
                <VolunteerCard />
              </div>
              
            </div>
            <div className="mt-5">
                <ol class="flex justify-center gap-1 text-xs font-medium">
                  <li>
                    <a
                      href="/"
                      class="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                    >
                      <span class="sr-only">Prev Page</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-3 w-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
  
                  <li>
                    <a
                      href="/"
                      class="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                    >
                      1
                    </a>
                  </li>
  
                  <li class="block size-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white">
                    2
                  </li>
  
                  <li>
                    <a
                      href="/"
                      class="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                    >
                      3
                    </a>
                  </li>
  
                  <li>
                    <a
                      href="/"
                      class="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                    >
                      4
                    </a>
                  </li>
  
                  <li>
                    <a
                      href="/"
                      class="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                    >
                      <span class="sr-only">Next Page</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-3 w-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ol>
              </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
