import { MoreVertical, Phone, Video } from "lucide-react";
import React from "react";
import MessagePage from "./messagePage";
export default function ChatPages() {
  return (
    <div className="flex flex-row w-full">
      <div className="w-1/3">
        <MessagePage />
      </div>
      <div className="w-full">
        <div className="w-full bg-gray-100 p-4 flex flex-row justify-between">
          <div className="flex flex-row">
            <img
              src="/images/profileimg.png"
              alt="pf pic"
              className="h-10 w-10 mr-2"
            />
            <div className="flex flex-col w-fit">
              <h2>John Doe</h2>
              <p className="text-[10px] w-full text-gray-500 text-center">
                Active
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <Phone size={25} className="mr-2 hover:cursor-pointer" />
            <Video size={30} className=" hover:cursor-pointer" />
          </div>
        </div>

        <div className="grid grid-rows-2 w-full mt-4 overflow-y-auto">
          <div className="w-full flex items-center">
            <p className="bg-blue-500 w-fit p-2 rounded-lg ml-5">Hello</p>{" "}
            <MoreVertical className="hover:cursor-pointer" />{" "}
          </div>
          <div className="w-full flex justify-end items-center">
            {" "}
            <MoreVertical className="hover:cursor-pointer" />{" "}
            <p className="text-right bg-blue-500 p-2 rounded-lg w-fit mr-5">
              lorem
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
