import React, { useState } from "react";
// import Education from "../../assets/images/education_Cover.webp";
import { Link } from "react-router-dom";
export default function CatagoriesCard(props) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="w-full lg:h-76 bg-gray-300 px-6 rounded-xl shadow-md flex flex-col justify-center items-center hover:cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
          <h2 className="text-2xl font-bold w-full text-center pt-4">
            {props.title}
          </h2>
        <div className="flex justify-center mt-8 pb-8">
        <Link to={props.link}>
          {isHovered ? (
            <p className="bg-blue-500 text-2xl text-center w-fit p-4 rounded-2xl hover:text-white">
              View More
            </p>
          ) : (
            <img
              src={props.img}
              alt="education img"
              className="w-96 rounded-lg"
            />
          )}
        </Link>
        </div>
    </div>
  );
}
