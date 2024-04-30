import React from "react";
import CatagoriesCard from "../Cardcomponents/catagoriesCard";
import NavBar from "../layouts/navBar";
import Footer from "../layouts/footer";
import CategoriesInfo from "../data/CatagoriesInfo";


function createCategoriesCard(props) {
    return <CatagoriesCard 
    key={props.id}
    title={props.title}
    img={props.img}
    link={props.link}
    />;
}


export default function CatagoriesPage() {
  return (
    <div>
    <NavBar />
        <div className="bg-gray-200 p-8 rounded-lg w-full flex flex-row mb-4 shadow-md">
          <div className="flex flex-row w-full justify-center place-items-center">
            <div className="flex flex-col justify-center align-middle bg-gray-200 pt-10 px-10 rounded-xl shadow-lg pb-10">
              <div className="flex flex-row">
                <h2 className="text-3xl font-bold text-center w-full">Catagories</h2>
              </div>
              <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full place-items-center gap-8 md:gap-8 lg:gap-10 mt-10">
                {CategoriesInfo.map(createCategoriesCard)}
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  );
}
