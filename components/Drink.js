import React, { useState } from "react";

function getClassName(isSelected) {
  if (isSelected) {
    return "isSelected";
  } else {
    return "isNotSelected";
  }
}

const Drink = ({ drink, onClick }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      className="relative flex flex-col items-center w-full h-40 py-8 overflow-hidden>"
      onClick={() => onClick(drink.id)}
    >
      <img
        className={getClassName(drink.isSelected)}
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
