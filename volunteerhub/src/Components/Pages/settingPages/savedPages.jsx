import React from "react";
import UserSettingPage from "./userSettingPage";
import VolunteerCard from "../../Cardcomponents/volunteerCard";

export default function savedPages() {
  return (
    <div className="grid grid-cols-6">
      <div>
        <UserSettingPage />
      </div>
      <div className="w-full col-span-5 p-5">
        <div>
          <h1>Saved</h1>
        </div>
        <div className="w-full grid grid-cols-3 gap-4">
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
