import React from "react";
import { Link } from "react-router-dom";
export default function ChatCard() {
  return (
    <div className="flex flex-row">
      <div>
        <Link to={"/userchat"}>
          <div className="grid grid-cols-6 items-center justify-start mb-4 hover:bg-gray-100 rounded-md p-2">
            <div className="">
              <img src="/images/profileimg.png" className="w-16 h-16" alt="" />
            </div>
            <div className={`flex flex-col justify-start col-span-5 pl-3`}>
              <div>
                <h2 className="font-bold">John Doe</h2>
              </div>
              <div className="flex flex-row ">
                <p className="truncate ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Lorem ipsum dolor sit amet.
                </p>
                <p className="ml-2">2h</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
