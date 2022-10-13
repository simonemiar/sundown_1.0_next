import React from "react";

const Dish = ({ dish }) => {
  return (
    <div>
      <div>
        <img
          className="object-cover w-full border h-80"
          src={dish.strMealThumb}
          alt="something"
        />
      </div>

      <p className="my-2 overflow-hidden text-4xl tracking-wider uppercase text-primary">
        {dish.strMeal}
      </p>
    </div>
  );
};

export default Dish;
