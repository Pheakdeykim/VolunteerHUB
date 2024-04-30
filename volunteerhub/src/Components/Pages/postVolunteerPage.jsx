import React, { useState } from "react";
import NavBar from "../layouts/navBar";
import Footer from "../layouts/footer";
export default function PostVolunteerPage() {
  const [images, setImages] = useState([]);
  const [confirmPopup, setConfirmPopup] = useState({
    show: false,
    action: "",
  });

  const handleImageUpload = (e) => {
    const fileList = e.target.files;
    const imagesArray = [];

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      const reader = new FileReader();

      reader.onload = (event) => {
        imagesArray.push(event.target.result);
        if (imagesArray.length === fileList.length) {
          setImages([...imagesArray]);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = (action) => {
    setConfirmPopup({
      show: true,
      action: action,
    });
  };

  const handleConfirmAction = () => {
    // Implement your action logic based on confirmPopup.action
    setConfirmPopup({
      show: false,
      action: "",
    });
  };

  const handleCancelAction = () => {
    setConfirmPopup({
      show: false,
      action: "",
    });
  };

  return (
    <div>
      <NavBar />
      <div className="w-screen  flex justify-center pt-10 bg-gray-50">
        <div className="bg-gray-100 w-full sm:w-3/4 md:w-2/3 lg:w-3/4 xl:w-3/4 h-auto flex flex-col justify-start text-lg rounded-lg shadow-lg px-16 py-10">
          <h1 className="text-3xl mb-10 w-full text-center pb-10">
            Create Volunteer
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-2 w-full gap-4 mb-4">
            <input type="text" placeholder="Title" className="rounded-lg p-1" />
            <input
              type="text"
              placeholder="Location"
              className="rounded-lg p-1"
            />
            <input
              type="text"
              placeholder="Start Date"
              className="rounded-lg p-1"
            />
            <input
              type="text"
              placeholder="End Date"
              className="rounded-lg p-1"
            />
          </div>
          <div className="flex flex-col w-full">
            <input
              type="text"
              placeholder="Requirements"
              className="rounded-lg p-1 mb-4"
            />
            <input
              type="text"
              placeholder="Position"
              className="rounded-lg p-1 mb-4"
            />
            <input
              type="text"
              placeholder="Categories"
              className="rounded-lg p-1 mb-4"
            />
            <textarea
              placeholder="Description"
              className="rounded-lg p-1 mb-4"
            ></textarea>
            <input
              type="file"
              accept="image/*"
              placeholder="Image"
              className="rounded-lg p-1 mb-4"
              multiple // Allow multiple file selection
              onChange={handleImageUpload}
            />
            <div className="flex flex-wrap gap-4">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Uploaded Img ${index + 1}`}
                  className="rounded-lg max-w-xs"
                />
              ))}
            </div>
          </div>
          <div className="text-lg sm:text-lg md:text-3xl lg:text-3xl grid grid-cols-2 gap-x-4 sm:gap-x-8 w-full justify-items-center mt-20">
            <button
              className="bg-red-600 p-2 lg:p-4 sm:p-2 md:p-4 rounded-2xl hover:bg-red-700 w-full md:w-40 sm:w-auto text-white"
              onClick={() => handleButtonClick("discard")}
            >
              Discard
            </button>
            <button
              className="bg-blue-500 p-4 lg:p-4 sm:p-2 md:p-4 rounded-2xl hover:bg-blue-700 w-full sm:w-auto lg:w-40 md:w-40 sm:mt-0 text-white"
              onClick={() => handleButtonClick("post")}
            >
              Post
            </button>
          </div>
        </div>
        {/* Confirmation Popup */}
        {confirmPopup.show && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-600 bg-opacity-75 flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg mb-4">
                {confirmPopup.action === "discard"
                  ? "Are you sure you want to discard?"
                  : "Are you sure you want to post?"}
              </p>
              <div className="flex justify-between">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 mr-4"
                  onClick={handleConfirmAction}
                >
                  <a href="/">Confirm</a>
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                  onClick={handleCancelAction}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
