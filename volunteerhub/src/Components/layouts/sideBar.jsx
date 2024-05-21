import React, { useContext, createContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronFirst,
  Menu,
  User,
  Bookmark,
  Clock2,
  Calendar,
  Settings,
  Info,
} from "lucide-react";
import DropdownMenu from "../components/dropDownMenu";

const SidebarContext = createContext();

export default function SidebarRender() {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-screen sticky top-0">
      <nav
        className={`h-full flex flex-col bg-white border-r shadow-sm ${
          expanded ? "sm:w-3/4 md:w-full" : "w-20"
        }`}
      >
        <div
          className={`pb-2 flex items-center mt-4 align-middle ${
            expanded ? "justify-between" : "justify-center"
          }`}
        >
          <div
            className={`flex flex-row items-center ${expanded ? "" : "hidden"}`}
          >
            <img
              src="/images/VolunteerHUBlogo.svg"
              className={`overflow-hidden transition-all h-20 w-fit ${
                expanded ? "w-32" : "w-0"
              }`}
              alt=""
            />
            <h2 className={`text-xl font-semibold`}>VolunteerHUB</h2>
          </div>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-2.5 rounded-lg hover:bg-indigo-50"
          >
            {expanded ? <ChevronFirst /> : <Menu size={25} />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul
            className={`flex-1 px-3 flex flex-col ${
              expanded ? "" : " items-center "
            }`}
          >
            <div className="flex flex-col">
              <SidebarItem
                icon={<User size={20} />}
                text="Profile"
                to="/profile"
              />
              <SidebarItem
                icon={<Bookmark size={20} />}
                text="Saved"
                to="/saved"
              />{" "}
              <SidebarItem
                icon={<Clock2 size={20} />}
                text="Joined"
                to="/joined"
              />{" "}
              <SidebarItem
                icon={<Calendar size={20} />}
                text="Schedule"
                to="/schedule"
              />{" "}
            </div>

            <div className="mt-auto">
              <SidebarItem icon={<Info size={20} />} text="Info" to="/faq" />{" "}
              <SidebarItem
                icon={<Settings size={20} />}
                text="Settings"
                to="/setting"
              />
            </div>
          </ul>
        </SidebarContext.Provider>

        <div
          className={`border-t flex p-3 items-center ${
            expanded ? "" : "self-center"
          }`}
        >
          <img
            onClick={() => setExpanded((curr) => !curr)}
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className={`w-10 h-10 rounded-md ${
              expanded ? "" : "hover:cursor-pointer"
            }`}
          />
          <div
            className={`
              flex justify-between items-center w-full
              overflow-hidden transition-all ${expanded ? "" : "hidden"}
          `}
          >
            <div className="leading-4 pl-2">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
          </div>

          <div className={`${expanded ? "" : "hidden"}`}>
            <DropdownMenu />
          </div>
        </div>
      </nav>
    </aside>
  );
}

function SidebarItem({ icon, text, active, alert, to }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}
    >
      <Link to={to} className="flex items-center w-full">
        {" "}
        {/* Wrap the icon and text with Link */}
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "w-0"
          }`}
        >
          {text}
        </span>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
              expanded ? "" : "top-2"
            }`}
          />
        )}
      </Link>
      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
