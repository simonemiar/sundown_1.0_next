import React from "react";

const Dish = ({ dish }) => {
  return (
    <div>
      <div>
        <img
          class="object-cover w-full border h-80"
          src={dish.strMealThumb}
          alt="something"
        />
      </div>

      <p class="my-2 overflow-hidden text-4xl tracking-wider uppercase text-primary">
        {dish.strMeal}
      </p>
      {/* {dishes.map((dish) => (
        <h1>{dish.strMeal}</h1>
      ))} */}
    </div>
  );
};

export default Dish;
