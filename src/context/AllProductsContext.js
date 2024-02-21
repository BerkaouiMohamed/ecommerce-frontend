import axios from "axios";
import { createContext, useEffect, useReducer } from "react";

export const productsContext = createContext();

const allproductsReducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: action.error,
      };
  }
};
function AllProductsContext({ children }) {
  const [state, dispatch] = useReducer(allproductsReducer, {
    products: [],
    loading: true,
    error: null,
  });
  useEffect(() => {
    axios.get("http://localhost:5000/api/product").then((res) => {
      if (res.data.status == "success") {
        dispatch({ type: "GET_PRODUCTS", payload: res.data.data, error: null });
      } else {
        dispatch({
          type: "GET_PRODUCTS",
          payload: null,
          error: res.data.error,
        });
      }
    });
  }, [dispatch]);
  return (
    <productsContext.Provider value={{ state, dispatch }}>
      {children}
    </productsContext.Provider>
  );
}

export default AllProductsContext;
