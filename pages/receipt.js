import React from "react";
import { useRouter } from "next/router";
import { StoreContext } from "../components/Context";
import { useContext, useState } from "react";
import Dish from "../components/Dish";

export default function date() {
  const { order, setOrder } = useContext(StoreContext);

  const router = useRouter();
  console.log(order.orderDate);
  function nextPage() {
    router.push(`/`);
  }
  function formatDate(orderDate) {
    return new Date(orderDate).toLocaleString("en-GB");
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
              <p className="text-lg">{formatDate(order.orderDate)}</p>
            </div>
            <div>
              <p className="text-xl font-bold uppercase">email:</p>
              <hr className="my-1 opacity-[0.5]" />
              <p className="text-lg">{order.orderEmail}</p>
            </div>
            <div>
              <p className="text-xl font-bold uppercase">amount of people:</p>
              <hr className="my-1 opacity-[0.5]" />
              <p className="text-lg">{order.orderPeople}</p>
            </div>
          </div>
          <div className="flex flex-col w-2/3 p-12 border border-red-600">
            <p className="mt-2 headliner">The ordered dish</p>
            <Dish dish={order.orderDish} class="p-5 bg-gray-100 rounded-md" />
            <p className="mt-4 headliner">The ordered drinks</p>
            <div className="flex flex-wrap">
              <div className="flex items-center flex-1 p-2 mb-4 ">
                {order.selectedDrinks.map((d) => (
                  <div
                    key={d.id}
                    className="flex-1 p-4 mr-1 bg-gray-100 rounded-md w-30 h-30"
                  >
                    <img
                      className="object-contain w-20 h-20 m-auto"
                      src={d.image_url}
                      alt="name"
                    />
                    <p className="text-center text-primary">{d.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
