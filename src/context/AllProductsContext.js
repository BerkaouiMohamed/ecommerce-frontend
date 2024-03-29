import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { contextUser } from "./UserContext";
import instance from "./axiosConfig";

export const productsContext = createContext();

const allproductsReducer = (state, action) => {
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
function AllProductsContext({ children }) {
  const {auth}=useContext(contextUser)
  const [state, dispatch] = useReducer(allproductsReducer, {
    products: [],
    loading: true,
    error: null,
  });
  useEffect(() => {
   auth&& instance.get("/api/product",{headers:{
      "authorization":`Bearer ${auth.token}`
      
          }}).then((res) => {
      if (res.data.status == "success") {
        dispatch({ type: "GET_PRODUCTS", payload: res.data.data, error: null });
      } else {
        dispatch({
          type: "GET_PRODUCTS",
          payload: null,
          error: res.data,
        });

      }
    });
  }, [dispatch,auth]);

  return (
    <productsContext.Provider value={{ state, dispatch }}>
      {children}
    </productsContext.Provider>
  );
}

export default AllProductsContext;
