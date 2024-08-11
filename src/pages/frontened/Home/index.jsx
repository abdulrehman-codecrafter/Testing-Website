import React from "react";
import Header from "../../../components/Header";
import Background from "../../../assets/background.png";
import f1 from "../../../assets/f1.png";
import f2 from "../../../assets/f2.png";
import f3 from "../../../assets/f3.png";
import f4 from "../../../assets/f4.png";
import f5 from "../../../assets/f5.png";
import f6 from "../../../assets/f6.png";
import FeatureCard from "../../../components/FeatureCard";
import products from "../../../data/products";
import ProductCard from "../../../components/ProductCard";
import Footer from "../../../components/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="my-5 hero-section d-flex align-items-center justify-content-between">
          <div className=" hero-content">
            <h1 className="fw-semibold">
              Discover the Future of <br />{" "}
              <span style={{ color: "#177c72" }}>Technology</span>
            </h1>
            <p>
              Explore our exclusive range of cutting-edge electronics <br />
              that redefine innovation and style.From the latest <br />
              smartphones to high-performance laptops.
            </p>
            <div className="hero-btn">
              <button className="btn"> Explore More</button>
            </div>
          </div>
          <div className=" hero-img">
            <img src={Background} alt="" />
          </div>
        </div>

        <div className="feature-section d-flex flex-wrap justify-content-center gap-2">
          <FeatureCard img={f1} text={"Free Shipping"} color={"#fddde4"} />
          <FeatureCard img={f2} text={"Online Order"} color={"#cdebbc"} />
          <FeatureCard img={f3} text={"Save Money"} color={"#d1e8f2"} />
          <FeatureCard img={f4} text={"Promotion"} color={"#cdd4f8"} />
        </div>

        <div className="featured-products-section">
          <h2 className="text-center my-5">Featured Products</h2>
          <div className="featured-items-container d-flex gap-3 flex-wrap justify-content-center">
            {products.map((product, index) => {
              return <ProductCard key={index} product={product} />;
            })}
          </div>
        </div>
{/* 
        <div className="home-page-banner">
          <h2 className="text-center">
            Up to 70 % Off - On All Accessories  
          </h2>
          <button className="btn btn-success"></button>
        </div> */}
      </div>

      <Footer />

    </>
  );
}
