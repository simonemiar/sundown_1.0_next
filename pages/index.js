import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { StoreContext } from "../components/Context";
import { useContext, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Home() {
  const { order, setOrder } = useContext(StoreContext);
  const router = useRouter();

  function startOrder() {
    router.push(`/dishes`);
  }

  return (
    <>
      <section className="h-full md:py-16 md:px-40 xl:px-80">
        <div className="md:flex">
          <div className="p-6 m-4 border border-red-600">
            <h2 className="text-2xl tracking-wider uppercase">
              start your order
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa
              voluptatibus suscipit accusantium
            </p>
            <button className="w-full primary_button" onClick={startOrder}>
              ORDER
            </button>
          </div>
          <div className="col-start-4 col-end-7 p-6 m-4 border border-red-600">
            <h2 className="text-2xl tracking-wider uppercase">
              find your order
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa
              voluptatibus suscipit accusantium
            </p>
            <form className="flex my-4">
              <input
                type="text"
                v-model="checkEmailInput"
                className="w-full py-2 mr-1 bg-white border border-red-600"
              />
              <input
                type="submit"
                value="find"
                className={styles.find_button}
              />
            </form>
          </div>
        </div>
        <div className="col-start-1 col-end-7 row-start-2 m-4 border border-red-600 ">
          <Carousel infiniteLoop showStatus={false} autoPlay showThumbs={false}>
            <div>
              <img src="/slider_image_1.webp" />
            </div>
            <div>
              <img src="/slider_image_2.jpg" />
            </div>
            <div>
              <img src="/slider_image_3.jpg" />
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
}
