import React from "react";

const Nav = () => {
  return (
    <nav>
      <div className="z-[999] fixed bottom-0 w-screen md:w-24 md:fixed md:bottom-0 md:top-[-215px] md:left-0 md:h-full">
        <ul className="flex items-center justify-between bg-white border border-red-700 md:w-20 sm:mt-24 md:inline-block md:top-1/2 md:translate-y-1/2">
          <li className="cursor-pointer hover:scale-110">
            <img
              class="w-10 m-2 md:w-12 md:h-12 md:m-auto md:my-6"
              src="/images/lokation.svg"
              alt="restauranter"
            />
          </li>
          <li className="cursor-pointer hover:scale-110">
            <img
              class="w-10 m-2 md:w-12 md:h-12 md:m-auto md:my-6"
              src="/images/produkt.svg"
              alt="produkter"
            />
          </li>
          <li className="cursor-pointer hover:scale-110">
            <img
              class="w-10 m-2 md:w-12 md:h-12 md:m-auto md:my-6"
              src="/images/logo.svg"
              alt="logo"
            />
          </li>
          <li className="cursor-pointer hover:scale-110">
            <img
              class="w-10 m-2 md:w-12 md:h-12 md:m-auto md:my-6"
              src="/images/nyhedsbrev.svg"
              alt="nyhedsbrev"
            />
          </li>
          <li className="cursor-pointer hover:scale-110">
            <img
              class="w-10 m-2 md:w-12 md:h-12 md:m-auto md:my-6"
              src="/images/kontakt.svg"
              alt="kontakter"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
