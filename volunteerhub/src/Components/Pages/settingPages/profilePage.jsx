import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";
import SideBar from "../../layouts/sideBar";

export default function ProfilePage() {
  const [isDeleteVisible, setIsDeleteVisible] = useState(false);
  const [showUpdatedContent, setShowUpdatedContent] = useState(false);
  useEffect(() => {
    let timer;
    if (showUpdatedContent) {
      timer = setTimeout(() => {
        setShowUpdatedContent(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [showUpdatedContent]);

  const handleDeleteConfirm = () => {
    setShowUpdatedContent(true);
    setIsDeleteVisible(false);
  };
  const handleHideUpdatedContent = () => {
    setShowUpdatedContent(false);
  };
  const sm = window.screen.width;
  return (
    <div className="flex flex-row">
      <div className={`${sm < 836 ? "fixed z-20" : ""}`}>
        <SideBar />
      </div>
      <div
        className={`w-fit md:w-full pr-5 ${
          sm < 836 ? "absolute top-0 left-20" : ""
        }`}
      >
        {showUpdatedContent && (
          <div className="fixed -top-4 z-20 left-[50%] translate-x-[-50%] mt-12 mx-4 px-4 rounded-md border-l-4 border-green-500 bg-green-50 md:max-w-2xl md:mx-auto md:px-8">
            <div className="flex justify-between py-3">
              <div className="flex">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 rounded-full text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="self-center ml-3">
                  <span className="text-green-600 font-semibold">Success</span>
                  <p className="text-green-600 mt-1">
                    Your account has been successfully deleted.
                  </p>
                </div>
              </div>
              <button
                className="self-start text-green-500"
                onClick={handleHideUpdatedContent}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
        <div>
          <div className="sticky top-0 bg-white mb-5">
            <h1 className="font-bold text-3xl p-3">Settings</h1>
          </div>
          <div className="flex flex-col items-center mb-20 h-fit md:flex-row md:items-start md:space-x-4">
            <div className="flex flex-col items-center md:w-1/4">
              <img
                src="/images/profileimg.png"
                alt="profile img"
                className="h-52 w-52 rounded-full"
              />
              <div className="flex flex-row w-full h-10 justify-center items-center mt-4">
                <h1 className="text-2xl font-medium">John Doe</h1>
                <div className="ml-4">
                  <Link to="/chat">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 inline hover:text-blue-600 hover:w-10 hover:h-10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <ul className="w-full md:w-3/4 border-r border-gray-400 pr-4 pt-5 text-lg">
              <div className="px-4 md:px-20">
                {/** Profile details list */}
                <li className="flex flex-col my-10 md:flex-row">
                  <div className="ml-3 md:ml-0 mr-3 flex flex-col w-full md:w-1/2">
                    <p className="font-medium">First Name</p>
                    <p className="text-gray-400">John</p>
                    <hr className="h-2 text-black w-full mt-2" />
                  </div>
                  <div className="ml-3 flex flex-col w-full md:w-1/2">
                    <p className="font-medium">Last Name</p>
                    <p className="text-gray-400">Doe</p>
                    <hr className="h-2 text-black w-full mt-2" />
                    <Link to="editprofilecd">
                      <button className="mt-2 text-blue-600 hover:text-blue-800">
                        Edit
                      </button>
                    </Link>
                  </div>
                </li>

                <li className="flex flex-col my-10 md:flex-row">
                  <div className="flex flex-col w-full">
                    <p className="font-medium">Country</p>
                    <p className="text-gray-400 mt-1">Cambodia</p>
                    <hr className="h-2 text-black w-full mt-2" />
                    <Link to="editprofilecd">
                      <button className="mt-2 text-blue-600 hover:text-blue-800">
                        Edit
                      </button>
                    </Link>
                  </div>
                </li>

                <li className="flex flex-col my-10 md:flex-row">
                  <div className="flex flex-col w-full">
                    <p className="font-medium">About me</p>
                    <p className="text-gray-400 mt-1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quibusdam, repellat officiis.
                    </p>
                    <hr className="h-2 text-black w-full mt-2" />
                    <Link to="editprofilecd">
                      <button className="mt-2 text-blue-600 hover:text-blue-800">
                        Edit
                      </button>
                    </Link>
                  </div>
                </li>

                <li className="flex flex-col my-10 md:flex-row">
                  <div className="flex flex-col w-full">
                    <p className="font-medium">Phone number</p>
                    <p className="text-gray-400 mt-1">0XX-XXX-XXX</p>
                    <hr className="h-2 text-black w-full mt-2" />
                    <Link to="editprofilecd">
                      <button className="mt-2 text-blue-600 hover:text-blue-800">
                        Edit
                      </button>
                    </Link>
                  </div>
                </li>

                <li className="flex flex-col my-10 md:flex-row">
                  <div className="flex flex-col w-full">
                    <p className="font-medium">Gender</p>
                    <p className="text-gray-400 mt-1">N/A</p>
                    <hr className="h-2 text-black w-full mt-2" />
                    <Link to="editprofilecd">
                      <button className="mt-2 text-blue-600 hover:text-blue-800">
                        Edit
                      </button>
                    </Link>
                  </div>
                </li>

                <li className="flex flex-col my-10 md:flex-row">
                  <div className="flex flex-col w-full">
                    <p className="font-medium">Language Spoken</p>
                    <p className="text-gray-400 mt-1">Khmer/English</p>
                    <hr className="h-2 text-black w-full mt-2" />
                    <Link to="editprofilecd">
                      <button className="mt-2 text-blue-600 hover:text-blue-800">
                        Edit
                      </button>
                    </Link>
                  </div>
                </li>

                <li className="flex flex-col my-10 md:flex-row">
                  <div className="flex flex-col w-full">
                    <p className="font-medium">Interests</p>
                    <p className="text-gray-400 mt-1">N/A</p>
                    <hr className="h-2 text-black w-full mt-2" />
                    <Link to="editprofilecd">
                      <button className="mt-2 text-blue-600 hover:text-blue-800">
                        Edit
                      </button>
                    </Link>
                  </div>
                </li>
                {/** End of Profile details list */}

                {/** Delete account section */}
                <li className="my-10 w-full">
                  <Dialog.Root>
                    <div className="flex justify-end">
                      <div className="flex flex-col font-medium">
                        <h1 className="text-right">Delete Account</h1>
                        <Dialog.Trigger
                          className="w-full p-4 shadow-sm rounded-md bg-red-600 hover:bg-red-800 text-white mt-2 text-center"
                          onClick={() => setIsDeleteVisible(true)}
                        >
                          Delete
                        </Dialog.Trigger>
                      </div>
                    </div>
                    <Dialog.Portal>
                      {isDeleteVisible && (
                        <>
                          <Dialog.Overlay className="fixed inset-0 w-full h-full bg-black opacity-40" />
                          <Dialog.Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] px-4 w-full max-w-lg">
                            <div className="bg-white rounded-md shadow-lg px-4 py-6 sm:flex text-center flex-col">
                              <div className="flex items-center justify-center flex-none w-12 h-12 mx-auto bg-red-100 rounded-full">
                                <svg
                                  aria-hidden="true"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  className="text-red-600 w-6 h-6"
                                >
                                  <path
                                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                  ></path>
                                </svg>
                              </div>
                              <div className="mt-2 text-center sm:ml-4 sm:text-center">
                                <Dialog.Title className="text-lg text-center font-semibold text-gray-800">
                                  Delete Account
                                </Dialog.Title>
                                <Dialog.Description className="mt-2 text-sm text-center leading-relaxed text-gray-500">
                                  Are you sure you want to delete your account?
                                  This action cannot be undone.
                                </Dialog.Description>
                                <div className="items-center gap-2 mt-3 text-sm sm:flex">
                                  <Dialog.Close asChild>
                                    <button
                                      className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md ring-offset-2 ring-red-600 focus:ring-2"
                                      onClick={handleDeleteConfirm}
                                    >
                                      Delete
                                    </button>
                                  </Dialog.Close>
                                  <Dialog.Close asChild>
                                    <button
                                      aria-label="Close"
                                      className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md border ring-offset-2 ring-indigo-600 focus:ring-2"
                                      onClick={() => setIsDeleteVisible(false)}
                                    >
                                      Cancel
                                    </button>
                                  </Dialog.Close>
                                </div>
                              </div>
                            </div>
                          </Dialog.Content>
                        </>
                      )}
                    </Dialog.Portal>
                  </Dialog.Root>
                </li>
                {/** End of Delete account section */}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
