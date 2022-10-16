import React from "react";
import { useRouter } from "next/router";
import { StoreContext } from "../components/Context";
import { useContext, useState } from "react";
import Dish from "../components/Dish";

export default function date() {
  const { order, setOrder } = useContext(StoreContext);

  const router = useRouter();

  function nextPage() {
    router.push(`/`);
  }
  return (
    <>
      <section className="w-full md:h-5/6 md:py-1 md:px-28 lg:px-34 xl:px-80">
        <div className="w-full md:flex md:flex-row-reverse">
          <button
            className="h-10 col-span-2 uppercase primary_button"
            onClick={nextPage}
          >
            Back to home
          </button>
        </div>
        <div className="flex pb-10">
          <div className="w-1/3 p-4 py-10 text-white md:flex md:flex-col md:justify-between bg-primary">
            <h2 className="text-4xl">Order confirmed!</h2>
            <div>
              <p className="text-xl font-bold uppercase">
                confirmation number:
              </p>
              <hr className="my-1 opacity-[0.5]" />
              <p className="text-lg">{order.orderId}</p>
            </div>
            <div>
              <p className="text-xl font-bold uppercase">order date:</p>
              <hr className="my-1 opacity-[0.5]" />
              <p className="text-lg">order date</p>
            </div>
            <div>
              <p className="text-xl font-bold uppercase">email:</p>
              <hr className="my-1 opacity-[0.5]" />
              <p className="text-lg">{order.email}</p>
            </div>
            <div>
              <p className="text-xl font-bold uppercase">amount of people:</p>
              <hr className="my-1 opacity-[0.5]" />
              <p className="text-lg">{order.people}</p>
            </div>
          </div>
          <div className="flex flex-col w-2/3 p-12 border border-red-600">
            <p className="mt-2 headliner">dish</p>

            <p className="mt-4 headliner">The ordered drinks</p>
            <div className="flex flex-wrap">
              <div className="flex flex-col items-center flex-1 p-2 mb-4 mr-4 bg-gray-100 rounded-md w-30 h-30">
                {/* <p className="text-center text-primary">
                {order.selectedDrinks.map((drink) => (
              <Drink key={drink.id} drink={drink} onClick={onDrinkClicked} />
            ))}
                  {order.selectedDrinks.map(something something)}
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
