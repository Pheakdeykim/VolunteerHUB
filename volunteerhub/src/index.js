import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Components/Pages/homePage";
import VolunteerPage from "./Components/Pages/volunteerPage";
import ErrorPage from "./Components/Pages/errorPage";
import CatagoriesPage from "./Components/Pages/catagoriesPage";
import Login from "./Components/account/loginPage";
import SignUpPage from "./Components/account/signupPage";
import PostVolunteerPage from "./Components/Pages/postVolunteerPage";
import ProfilePage from "./Components/Pages/settingPages/profilePage";
import SavePage from "./Components/Pages/settingPages/savedPages";
import JoinPage from "./Components/Pages/settingPages/joinedPage";
import SettingPage from "./Components/Pages/settingPages/settingPage";
import MessagePage from "./Components/Pages/messagePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/volunteer",
    element: <VolunteerPage />,
  },
  {
    path: "/catagory",
    element: <CatagoriesPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/post",
    element: <PostVolunteerPage />,
  },
  {
    path: "/userprofile",
    element: <ProfilePage />,
  },
  {
    path: "/saved",
    element: <SavePage />,
  },
  {
    path: "/joined",
    element: <JoinPage />,
  },
  {
    path: "/setting",
    element: <SettingPage />,
  },
  {
    path: "/chat",
    element: <MessagePage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
