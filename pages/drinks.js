import React from "react";
import Drink from "../components/Drink";

export default function drinks() {
  return (
    <>
      <section className="w-full md:grid md:h-full md:grid-cols-3 md:py-20 md:px-40 xl:px-80">
        <div className="col-start-1 col-end-3 m-3 border border-red-600">
          {/* <Drink /> */}
        </div>
        <div className="col-start-3 col-end-4 m-3 mb-20 md:mb-3">
          <div className="p-6 border border-red-600">
            <h2 className="headliner2">Pick your drinks</h2>
            <p className="text-primary">
              Ready to proceed <br />
              Click on next
            </p>
          </div>
          <button className="w-full primary_button">next</button>
        </div>
      </section>
    </>
  );
}
