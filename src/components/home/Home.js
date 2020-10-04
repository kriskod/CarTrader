import React from "react";
import Banner from "../banner/Banner";
import CarOffer from "../carOffer/CarOffer";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <CarOffer
          image="https://specials-images.forbesimg.com/imageserve/5d3703e2f1176b00089761a6/960x0.jpg?cropX1=836&cropX2=5396&cropY1=799&cropY2=3364"
          title="Corvette very fast"
          description="super fast car, 454 hp, 5,7 litre v8 wow"
          price="115,500"
        />
        <CarOffer
          image="https://specials-images.forbesimg.com/imageserve/5d3703e2f1176b00089761a6/960x0.jpg?cropX1=836&cropX2=5396&cropY1=799&cropY2=3364"
          title="Corvette very fast"
          description="super fast car, 454 hp, 5,7 litre v8 wow"
          price="115,500"
        />
        <CarOffer
          image="https://specials-images.forbesimg.com/imageserve/5d3703e2f1176b00089761a6/960x0.jpg?cropX1=836&cropX2=5396&cropY1=799&cropY2=3364"
          title="Corvette very fast"
          description="super fast car, 454 hp, 5,7 litre v8 wow"
          price="115,500"
        />
      </div>
      <div className="home__section">
        <CarOffer
          image="https://specials-images.forbesimg.com/imageserve/5d3703e2f1176b00089761a6/960x0.jpg?cropX1=836&cropX2=5396&cropY1=799&cropY2=3364"
          title="Corvette very fast"
          description="super fast car, 454 hp, 5,7 litre v8 wow"
          price="115,500"
        />
        <CarOffer
          image="https://specials-images.forbesimg.com/imageserve/5d3703e2f1176b00089761a6/960x0.jpg?cropX1=836&cropX2=5396&cropY1=799&cropY2=3364"
          title="Corvette very fast"
          description="super fast car, 454 hp, 5,7 litre v8 wow"
          price="115,500"
        />
        <CarOffer
          image="https://specials-images.forbesimg.com/imageserve/5d3703e2f1176b00089761a6/960x0.jpg?cropX1=836&cropX2=5396&cropY1=799&cropY2=3364"
          title="Corvette very fast"
          description="super fast car, 454 hp, 5,7 litre v8 wow"
          price="115,500"
        />
      </div>
    </div>
  );
}

export default Home;
