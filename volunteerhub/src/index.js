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
import "flowbite";
import ChatPages from "./Components/Pages/MessagePages/chatPage";
import FAQPage from "./Components/Pages/FAQPage.jsx";
import ContactUs from "./Components/Pages/contactUsPage.jsx";
import BlogPage from "./Components/Pages/blogPage.jsx";
import BlogCard from "./Components/Pages/blogCard.jsx";
import VolunteerInfoPage from "./Components/Pages/volunteerInfoPage.jsx";
import SchedulePage from "./Components/Pages/settingPages/schedulePage.jsx";

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
    path: "/profile",
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
    path: "/schedule",
    element: <SchedulePage />,
  },
  {
    path: "/setting",
    element: <SettingPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/userchat",
    element: <ChatPages />,
  },
  {
    path: "/chat",
    element: <ChatPages />,
  },
  {
    path: "/faq",
    element: <FAQPage />,
  },
  {
    path: "/contactus",
    element: <ContactUs />,
  },
  {
    path: "/blog",
    element: <BlogCard />,
  },
  {
    path: "/blogarticle",
    element: <BlogPage />,
  },
  {
    path: "/volunteerpage",
    element: <VolunteerInfoPage />,
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
