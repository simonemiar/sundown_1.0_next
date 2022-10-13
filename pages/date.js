import React, { useState } from "react";
import { useRouter } from "next/router";

export default function date() {
  const [counter, setCounter] = useState(1);
  const router = useRouter();

  //increase counter
  const increase = () => {
    setCounter((count) => count + 1);
  };

  //decrease counter
  const decrease = () => {
    // setCounter((count) => count - 1);
    if (counter > 1) {
      setCounter((count) => count - 1);
    }
  };

  function emailValidation() {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  }

  function nextPage() {
    router.push(`/receipt`);
  }
  return (
    <>
      <section className="md:flex h-5/6 md:py-16 md:px-40 xl:px-80">
        <div className="p-6 m-4 border border-red-600 md:w-full">
          <h2 className="headliner">Please choose date and time</h2>
          <div></div>
        </div>
        <div className="flex flex-col justify-between m-4 md:w-full">
          <div className="h-full p-6 mb-4 border border-primary">
            <h2 className="headliner">Please pick amount of people</h2>
            <div className="flex justify-center gap-3 text-7xl text-secondary">
              <button onClick={decrease}>-</button>
              <p>{counter}</p>
              <button onClick={increase}>+</button>
            </div>
          </div>
          <div className="h-full p-6 mb-4 border border-red-600">
            <h2 className="headliner">Please enter your email</h2>
            <form>
              <input
                v-model={this.state.email}
                type="email"
                className="w-full p-2 border border-red-600"
                placeholder="Enter your email"
                onChange={this.onChange}
              />
            </form>
          </div>
          <button
            className="w-full h-full mb-32 uppercase secondary_button md:mb-0"
            onClick={nextPage}
          >
            order/update
          </button>
        </div>
      </section>
    </>
  );
}
