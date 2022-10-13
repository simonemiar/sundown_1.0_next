import React from "react";
import { useRouter } from "next/router";

export default function date() {
  const router = useRouter();

  function nextPage() {
    router.push(`/`);
  }
  return (
    <>
      <section className="w-full md:h-5/6 md:py-1 xl:px-80">
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
              <p className="text-lg">order id</p>
            </div>
            <div>
              <p className="text-xl font-bold uppercase">order date:</p>
              <hr className="my-1 opacity-[0.5]" />
              <p className="text-lg">order date</p>
            </div>
            <div>
              <p className="text-xl font-bold uppercase">email:</p>
              <hr className="my-1 opacity-[0.5]" />
              <p className="text-lg">order email</p>
            </div>
            <div>
              <p className="text-xl font-bold uppercase">amount of people:</p>
              <hr className="my-1 opacity-[0.5]" />
              <p className="text-lg">amount of people</p>
            </div>
          </div>
          <div className="flex flex-col w-2/3 p-12 border border-red-600">
            <p className="mt-2 headliner">The ordered dish</p>

            <p className="mt-4 headliner">The ordered drinks</p>
            <div className="flex flex-wrap">
              <div className="flex flex-col items-center flex-1 p-2 mb-4 mr-4 bg-gray-100 rounded-md w-30 h-30">
                <p className="text-center text-primary">selected drinks</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
