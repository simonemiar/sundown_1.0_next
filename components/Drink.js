import React from "react";

const Drink = ({ drink }) => {
  function toggleDrink() {
    // e.stopPropagation();
    console.log("testdrinks", drink);
    if (drink.isSelected) {
      drink.isSelected = false;
      console.log("drink false", drink);
    } else {
      drink.isSelected = true;
      console.log("drink true", drink);
    }
  }
  return (
    <div
      className="relative flex flex-col items-center w-full h-40 py-8 overflow-hidden>"
      onClick={toggleDrink}
    >
      {/* <img
        className="absolute top-0 right-0 w-8 m-3 opacity-0"
        src="/images/check.svg"
        alt="check"
      /> */}
      <img
        className={drink.isSelected ? "isSelected" : "isNotSelected"}
        src="/images/check.svg"
        alt="check"
      />
      <img
        className="object-contain w-full h-full"
        src={drink.image_url}
        alt="something"
      />
      <h3 className="h-20 p-2 text-sm tracking-wide uppercase">{drink.name}</h3>
    </div>
  );
};

export default Drink;
