import React, { useEffect, useState } from "react";
import HomeSlider from "../components/HomeSlider";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import HomeProductsContext, { homeContext } from "../context/HomeProductsContext";
import { useContext } from "react";

function Home() {
    const {state} = useContext(homeContext);
    const {products,loading,error} = state;
  return (
 
  <div className="home-container">
      <HomeSlider />
   { loading?<img src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif" alt=""/>:  
   
   <div className="product-container">
    { error?<p>{"error"}</p>:
     products?.map((product)=><ProductCard key={product._id} product={product} />)}
      </div>
      
      }
    </div> 
  );
}

export default Home;
