import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { StoreContext } from "../components/Context";
import { useContext, useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Home() {
  const { order, setOrder } = useContext(StoreContext);
  const [orders, setOrders] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    console.log(order);
    if (localStorage.orders) {
      setOrders(JSON.parse(localStorage.orders));
    }
    console.log(orders);
  }, []);

  function startOrder() {
    // setOrder(...defaultOrder);
    // const { current: useContext } = React.useRef({
    //   ...defaultOrder,
    // });
    router.push(`/dishes`);
  }

  const handleChange = (event) => {
    setInput(event.target.value);
    console.log("value is:", event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    const orderFound = orders.find((element) => {
      return element.email == input;
    });

    console.log(orderFound);
    if (orderFound) {
      console.log("order found");
      setOrder(orderFound);
      router.push(`/dishes`);
    } else {
      console.log("no order under email");
      setError("no order under this email required");
    }
    console.log("submit confirmed");
  };

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
            {error && <h2 style={{ color: "red" }}>{error}</h2>}
            <form onSubmit={handleSubmit} className="flex my-4">
              <input
                type="text"
                onChange={handleChange}
                value={input}
                placeholder="enter your email"
                className="w-full p-2 mr-1 bg-white border border-red-600"
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
              <img src="/slider_image_1.png" />
            </div>
            <div>
              <img src="/slider_image_2.png" />
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
