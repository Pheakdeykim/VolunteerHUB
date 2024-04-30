import React from "react"; // Add the missing import statement for React
import "./App.css";
import NavBar from "./Components/navBar";
import Footer from "./Components/footer";
import HomePage from "./Components/Pages/homePage";
export default function App() {
  return (
    <div>
      <NavBar/>
      <HomePage/>
      <Footer/>
    </div>
  );
}
