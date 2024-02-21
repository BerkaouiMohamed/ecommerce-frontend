import axios from "axios";
import { createContext, useEffect, useReducer } from "react";

export const homeContext = createContext();

const homeProductsReducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        products: action.payload,
        loading: false,
        error: action.error,
      };
      default:return state
  }
};
function HomeProductsContext({ children }) {
  const [state, dispatch] = useReducer(homeProductsReducer, {
    products: [],
    loading: true,
    error: null,
  });
  useEffect(() => {
    axios.get("http://localhost:5000/api/product?limit=5").then((res) => {
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
    <homeContext.Provider value={{ state, dispatch }}>
      {children}
    </homeContext.Provider>
  );
}

export default HomeProductsContext;
