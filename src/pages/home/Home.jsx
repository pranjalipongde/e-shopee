import React, { useEffect } from "react";
import Slider from "../../components/slider/Slider";
import AdminOnlyRoute from "../../components/adminOnlyRoute/AdminOnlyRoute";
import Product from "../../components/product/Product";

const Home = () => {
  const url = window.location.href;
  // alert(url);

  useEffect(() => {
    const srollToProducts = () => {
      if (url.includes("#products")) {
        window.scrollTo({
          top: 700,
          behavior: "smooth",
        });
        return;
      }
    };
    srollToProducts();
  }, [url]);

  return (
    <div>
      <Slider />
      <Product />
    </div>
  );
};

export default Home;
