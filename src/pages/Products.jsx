import React, { useContext } from "react";
import { productsContext } from "../context/AllProductsContext";
import ProductCard from "../components/ProductCard";

function Products() {
    const {state} = useContext(productsContext);
    const {products,loading,error} = state;
  return (
    <div className="products-container">
      {loading ? (
        <img
          src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif"
          alt=""
        />
      ) : (
        <div className="product-container">
          {error ? (
            <p>{"error"}</p>
          ) : (
            products?.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default Products;
