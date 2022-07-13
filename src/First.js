import logo from "./logo.svg";
// import "./App.css";
import { React, useEffect, useState } from "react";
import { CarouselComponent } from "./Components/Home";
import { Home } from "./Components/Home";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";

export function First() {
  const url = "https://v3.tissini.app/api/v3/categories/sections";
  const [datos, setDatos] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    // console.log(response);
    const responseJSON = await response.json();
    setDatos(responseJSON);
    // console.log(responseJSON);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  var urls = [
    {
      src: "https://v3.tissini.app/img/categories/multivendor/hogar.jpg",
    },
    {
      src: "https://v3.tissini.app/img/categories/multivendor/textiles-jeans.jpg",
    },
    {
      src: "https://v3.tissini.app/img/categories/multivendor/textiles-fajas.jpg",
    },
    {
      src: "https://v3.tissini.app/img/categories/multivendor/textiles-body-control.jpg",
    },
    {
      src: "https://v3.tissini.app/img/categories/multivendor/textiles-ropa-interior.jpg",
    },
    {
      src: "https://v3.tissini.app/img/categories/multivendor/textiles-leggings.jpg",
    },
    {
      src: "https://v3.tissini.app/img/categories/multivendor/textiles-sport.jpg",
    },
    {
      src: "https://v3.tissini.app/img/categories/multivendor/textiles-blusas.jpg",
    },
    {
      src: "https://v3.tissini.app/img/categories/multivendor/textiles-tapabocas.jpg",
    },
    {
      src: "https://v3.tissini.app/img/categories/multivendor/textiles-zapatos.jpg",
    },
    {
      src: "https://v3.tissini.app/img/categories/multivendor/textiles-pantalones.jpg",
    },
    {
      src: "https://v3.tissini.app/img/categories/multivendor/textiles-leggings.jpg",
    },
  ];

  // console.log(datos);

  return (
    <div className="First">
      <Header />
      <Home dato={datos} urls={urls} />
      <Footer />
    </div>
  );
}
