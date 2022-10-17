import React, { useState, useContext, useEffect } from "react";
import Dish from "../components/Dish";
import { useRouter } from "next/router";
import { StoreContext } from "../components/Context";

export default function dishes({ dish }) {
  const { order, setOrder } = useContext(StoreContext);
  const [receipe, setReceipe] = useState(dish);
  const [newOrderId, setNewOrderId] = useState(order.orderId);
  const router = useRouter();
  console.log(order.orderId);
  useEffect(() => {
    if (order.orderId == null) {
      const newId = Math.random().toString(36).substr(2, 9);
      setOrder({ ...order, orderId: newId });
    }
    if (Object.keys(order.orderDish).length) {
      setReceipe(order.orderDish);
      console.log("old dish", order.orderDish);
    }
  }, []);

  dish = receipe;
  async function fetchData() {
    const req = await fetch(
      "https://www.themealdb.com/API/JSON/V1/1/RANDOM.PHP"
    );
    const newData = await req.json();
    return setReceipe(newData.meals[0]);
  }
  function handleClick() {
    fetchData();
  }
  function nextPage() {
    setOrder({ ...order, orderDish: dish });

    console.log("after", order.orderDish);
    router.push(`/drinks`);
  }

  return (
    <>
      <section className="w-full md:grid md:h-screen md:grid-cols-3 md:py-16 md:px-28 lg:px-34 xl:px-80">
        <div className="col-start-1 col-end-3 m-3 h-[500px] lg:h-[650px]">
          <div className="w-full h-full p-6 overflow-auto border border-red-600">
            <Dish dish={dish} />
            <div className="flex my-2">
              <h3 className="hashtag">{dish.strCategory}</h3>
              <h3 className="hashtag">{dish.strArea}</h3>
            </div>
            <p className="mt-3 font-medium uppercase">Check out the receipe:</p>
            <p className="sm:columns-2">{dish.strInstructions}</p>
          </div>
          <button className="w-full primary_button" onClick={handleClick}>
            generate new dish
          </button>
        </div>
        <div className="w-full p-3 mt-20 mb-20 md:m-3 md:mt-0">
          <div className="p-6 border border-red-600">
            <h2 className="headliner2">
              Found the dish you where looking for?
            </h2>
            <p className="text-primary">Click on next to proceed</p>
          </div>
          <button className="w-full primary_button" onClick={nextPage}>
            next
          </button>
        </div>
      </section>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`https://www.themealdb.com/API/JSON/V1/1/RANDOM.PHP`);
  const receipe = await res.json();
  const dish = receipe.meals[0];

  return {
    props: { dish },
  };
};
