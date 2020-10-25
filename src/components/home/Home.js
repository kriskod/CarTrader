import Axios from "axios";
import React, { useEffect, useState } from "react";
import Banner from "../banner/Banner";
import CarOffer from "../carOffer/CarOffer";
import "./Home.css";

function Home() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await Axios.get("http://localhost:5000/cars", {
        params: {
          _limit: 10,
        },
      });
      setCars(data.cars);
      console.log(data.cars);
    };

    fetchData();
  }, []);

  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <div className="home__item">
          <CarOffer
            image="https://image.ceneostatic.pl/data/products/74843015/i-ferrari-488-spider.jpg"
            title="ferrari, 5.8 V8, skóra fura i komura"
            year="2018"
            mileage="1000"
            fuel="Gas"
            engine="5800"
            price="5555555"
          />
        </div>
        <div className="home__item">
          <CarOffer
            image="https://image.ceneostatic.pl/data/products/74843015/i-ferrari-488-spider.jpg"
            title="Ferrari Italia, 5.8 V8, skóra fura i komura"
            year="2018"
            mileage="1000"
            fuel="Gas"
            engine="5800"
            price="5555555"
          />
        </div>
        <div className="home__item">
          <CarOffer
            image="https://image.ceneostatic.pl/data/products/74843015/i-ferrari-488-spider.jpg"
            title="Ferrari Italia, 5.8 V8, skóra fura i komura"
            year="2018"
            mileage="1000"
            fuel="Gas"
            engine="5800"
            price="5555555"
          />
        </div>
        <div className="home__item">
          <CarOffer
            key="dupa"
            image="https://image.ceneostatic.pl/data/products/74843015/i-ferrari-488-spider.jpg"
            title="Ferrari Italia, 5.8 V8, skóra fura i komura dupa"
            year="2018"
            mileage="1000"
            fuel="Gas"
            engine="5800"
            price="5555555"
          />
        </div>
        <div className="home__item">
          <CarOffer
            key="dupa"
            image="https://image.ceneostatic.pl/data/products/74843015/i-ferrari-488-spider.jpg"
            title="Ferrari Italia, 5.8 V8, skóra fura i komura"
            year="2018"
            mileage="1000"
            fuel="Gas"
            engine="5800"
            price="5555555"
          />
        </div>

        {cars.map((car) => (
          <div className="home__item">
            <CarOffer
              key={car._id}
              image={car.carImage}
              title={car.title}
              year={car.year}
              mileage={car.mileage}
              fuel={car.fuelType}
              engine={car.engine}
              title={car.title}
              price={car.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
