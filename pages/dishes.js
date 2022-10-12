import React, { useState, useEffect } from "react";
import Dish from "../components/Dish";

export default function dishes({ dish }) {
  console.log(dishes);
  //const [dish, setDish] = useState(null);

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(
  //       "https://www.themealdb.com/API/JSON/V1/1/RANDOM.PHP"
  //     );
  //     const dish = await response.json();
  //     setDish(dish.meals[0]);
  //     console.log(dish);
  //   }
  //   fetchData();
  // }, []);

  return (
    <>
      <section className="w-full md:grid md:h-screen md:grid-cols-3 md:py-16 md:px-40 xl:px-80">
        <div className="col-start-1 col-end-3 m-3 h-[500px] lg:h-[750px]">
          <div className="w-full h-full p-6 overflow-auto border border-red-600">
            <Dish dish={dish} />
            <div className="flex my-2">
              <h3 className="hashtag">{dish.strCategory}</h3>
              <h3 className="hashtag">{dish.strArea}</h3>
            </div>
            <p className="mt-3 font-medium uppercase">Check out the receipe:</p>
            <p className="sm:columns-2">{dish.strInstructions}</p>
          </div>
          <button className="w-full primary_button">generate new dish</button>
        </div>
        <div className="w-full p-3 mt-20 mb-20 md:m-3 md:mt-0">
          <div className="p-6 border border-red-600">
            <h2 className="headliner2">
              Found the dish you where looking for?
            </h2>
            <p className="text-primary">Click on next to proceed</p>
          </div>
          <button className="w-full primary_button">next</button>
        </div>
      </section>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`https://www.themealdb.com/API/JSON/V1/1/RANDOM.PHP`);
  const data = await res.json();
  const dish = data.meals[0];

  return {
    props: { dish },
  };
};
