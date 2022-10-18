import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { StoreContext } from "../components/Context";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { Datepicker, setOptions } from "@mobiscroll/react";

setOptions({
  theme: "ios",
  themeVariant: "light",
});

export default function date() {
  const { order, setOrder } = useContext(StoreContext);
  let [orders, setOrders] = useState([]);
  const [email, setEmail] = useState(order.orderEmail);
  const [people, setPeople] = useState(order.orderPeople);
  const [selectedDate, setDate] = useState(order.orderDate);
  const [error, setError] = useState("");
  const [button, setButton] = useState("finalize order");

  const [fake, setFake] = useState(false);
  const [firstMount, setFirstMount] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (order.orderCompleted) {
      setButton("update order");
    } else {
      setButton("finalize order");
    }
    if (localStorage.orders) {
      let getOrders = localStorage.getItem("orders");
      let parseOrder = JSON.parse(getOrders);

      if (parseOrder !== undefined) {
        // orders = parseOrder;
        console.log(parseOrder);
        setOrders(parseOrder);
      }
    }
  }, []);

  //increase counter
  const increase = () => {
    setPeople((people) => people + 1);
  };

  //decrease counter
  const decrease = () => {
    if (people > 1) {
      setPeople((people) => people - 1);
    }
  };

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };
  function setData() {
    console.log(email);
    console.log(people);

    setOrder({
      ...order,
      orderEmail: email,
      orderPeople: people,
      orderDate: selectedDate,
      orderCompleted: true,
    });
    console.log(order);
    setFake(true);
    console.log(fake);
  }

  useEffect(() => {
    if (!firstMount) {
      //gør noget
      finalizeOrder();
      console.log("second mounth");
    }
    setFirstMount(false);
    console.log("first mounth");
  }, [fake]);

  function finalizeOrder() {
    setFake(false);
    console.log(order);
    console.log(fake);

    const reg =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;

    if (!reg.test(email)) {
      console.log("email error");
      setError("Email is invalid");
    } else {
      setError("");
      console.log("email succes");
      if (orders === null) {
        orders = [];
      }
      const findOrder = orders.find((o) => o.orderId === order.orderId);
      console.log("find order", findOrder);
      if (findOrder) {
        orders.splice(orders.indexOf(findOrder), 1, order);
        console.log("splice");
      } else {
        setOrders((orders) => [...orders, order]);
        // orders.push(order);
        console.log("new");
      }
      console.log("order arr", orders);
      updateLocalStorage();
      router.push(`/receipt`);
    }
  }
  function updateLocalStorage() {
    localStorage.setItem("orders", JSON.stringify(orders));
  }
  const onChange = React.useCallback((event) => {
    setDate(event.value);
  }, []);
  return (
    <>
      <section className="md:flex h-5/6 md:py-16 md:px-28 lg:px-34 xl:px-80">
        <div className="p-6 m-4 border border-red-600 md:w-full">
          <h2 className="headliner">Please choose date and time</h2>
          <div>
            <Datepicker
              display="inline"
              controls={["calendar", "time"]}
              touchUi={true}
              onChange={onChange}
              value={selectedDate}
              min={new Date()}
              invalid={[
                {
                  recurring: {
                    repeat: "weekly",
                    weekDays: "SA,SU",
                  },
                },
              ]}
              valid={[
                {
                  start: "16:00",
                  end: "22:59",
                  recurring: {
                    repeat: "daily",
                  },
                },
              ]}
            />
          </div>
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
            {error && <h2 style={{ color: "red" }}>{error}</h2>}
            <form>
              <input
                type="email"
                className="w-full p-2 border border-red-600"
                placeholder="Enter your email"
                value={email}
                onChange={handleOnChange}
              />
            </form>
          </div>
          <button
            className="w-full h-full mb-32 uppercase secondary_button md:mb-0"
            onClick={setData}
          >
            {button}
          </button>
        </div>
      </section>
    </>
  );
}
