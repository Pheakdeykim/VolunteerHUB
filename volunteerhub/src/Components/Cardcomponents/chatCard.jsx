import React from "react";

export default function ChatCard() {
  return (
    <div>
      <div className="grid grid-cols-6 items-center justify-start mb-4">
        <div className="">
          <img src="/images/profileimg.png" className="w-16 h-16" alt="" />
        </div>
        <div className="flex flex-col justify-start col-span-5">
          <div><h2 className="font-bold">John Doe</h2></div>
          <div className="flex flex-row ">
              <p className="truncate w-3/4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.
              </p>
            <p className="ml-2">2h</p>
          </div>
        </div>
      </div>
    </div>
  );
}