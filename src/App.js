import React from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
      {/* <SearchResults/> */}
    </div>
  );
}

export default App;
