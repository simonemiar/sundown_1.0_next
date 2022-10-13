import React from "react";
import Drink from "../components/Drink";
import { useRouter, useContext } from "next/router";
import { StoreContext } from "../components/Context";

export default function drinks({ drinks }) {
  const router = useRouter();
  console.log(drinks);

  function nextPage() {
    router.push(`/date`);
  }
  return (
    <>
      <section className="w-full md:grid md:h-full md:grid-cols-3 md:py-16 md:px-40 xl:px-80">
        <div className="col-start-1 col-end-3 m-3 border border-red-600">
          <div className="w-full sm:grid sm:grid-cols-3">
            {drinks.map((drink) => (
              <Drink key={drink.id} drink={drink} />
            ))}
          </div>
        </div>
        <div className="col-start-3 col-end-4 m-3 mb-20 md:mb-3">
          <div className="p-6 border border-red-600">
            <h2 className="headliner2">Pick your drinks</h2>
            <p className="text-primary">
              Ready to proceed <br />
              Click on next
            </p>
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
  const res = await fetch(`https://api.punkapi.com/V2/BEERS`);
  const data = await res.json();
  data.forEach((drink) => (drink.isSelected = false));
  const drinks = data;

  return {
    props: { drinks },
  };
};
