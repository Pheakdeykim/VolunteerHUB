import React from "react";
import SideBar from "../../layouts/sideBar";
import VolunteerCard from "../../Cardcomponents/volunteerCard";

export default function savedPages() {
  const sm = window.screen.width;

  return (
    <div className="flex flex-row">
      <div className={`${sm < 836 ? "fixed z-20" : ""}`}>
        <SideBar />
      </div>
      <div className={`w-fit p-2 ${sm < 836 ? "absolute top-0 left-20" : ""}`}>
        <div className="sticky top-0 bg-white mb-5">
          <h1 className="font-bold text-3xl p-3">Saved</h1>
        </div>
        <div className="w-full grid grid-flow-row">
          <VolunteerCard />
          <VolunteerCard />
          <VolunteerCard />
          <VolunteerCard />
          <VolunteerCard />
          <VolunteerCard />
        </div>
      </div>
    </div>
  );
}