import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import { StoreContext } from "../components/Context";

export default function date() {
  const { order, setOrder } = useContext(StoreContext);
  const orders = [];

  const [email, setEmail] = useState(order.email);
  const [people, setPeople] = useState(order.people);
  const [date, setDate] = useState(order.date);
  const router = useRouter();

  //increase counter
  const increase = () => {
    setPeople((people) => people + 1);
  };

  //decrease counter
  const decrease = () => {
    // setCounter((count) => count - 1);
    if (people > 1) {
      setPeople((people) => people - 1);
    }
  };

  function emailValidation() {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  }

  const emailInput = (e) => setEmail(e.target.value);
  //   console.log(email);

  function finalizeOrder() {
    setOrder({ ...order, email: email, people: people, orderCompleted: true });
    if (orders === null) {
      this.orders = [];
    }
    const findOrder = orders.find((order) => order.orderId === order.orderId);
    console.log("find order", findOrder);
    if (findOrder) {
      orders.splice(orders.indexOf(findOrder), 1, order);
    } else {
      orders.push(order);
    }
    updateLocalStorage();
    router.push(`/receipt`);
  }
  function updateLocalStorage() {
    localStorage.setItem("orders", JSON.stringify(orders));
  }
  return (
    <>
      <section className="md:flex h-5/6 md:py-16 md:px-28 lg:px-34 xl:px-80">
        <div className="p-6 m-4 border border-red-600 md:w-full">
          <h2 className="headliner">Please choose date and time</h2>
          <div></div>
        </div>
        <div className="flex flex-col justify-between m-4 md:w-full">
          <div className="h-full p-6 mb-4 border border-primary">
            <h2 className="headliner">Please pick amount of people</h2>
            <div className="flex justify-center gap-3 text-7xl text-secondary">
              <button onClick={decrease}>-</button>
              <p>{people}</p>
              <button onClick={increase}>+</button>
            </div>
          </div>
          <div className="h-full p-6 mb-4 border border-red-600">
            <h2 className="headliner">Please enter your email</h2>
            <form>
              <input
                type="email"
                className="w-full p-2 border border-red-600"
                placeholder="Enter your email"
                onBlur={emailInput}
              />
            </form>
          </div>
          <button
            className="w-full h-full mb-32 uppercase secondary_button md:mb-0"
            onClick={finalizeOrder}
          >
            order/update
          </button>
        </div>
      </section>
    </>
  );
}
