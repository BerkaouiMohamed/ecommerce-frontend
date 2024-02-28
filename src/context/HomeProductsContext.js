import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { contextUser } from "./UserContext";

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
  const  {auth}=useContext(contextUser)
  const [state, dispatch] = useReducer(homeProductsReducer, {
    products: [],
    loading: true,
    error: null,
  });
  console.log(auth);
  
  useEffect(() => {
  auth&& axios.get("http://localhost:5000/api/product?limit=5",{headers:{ 
"Authorization":`Bearer ${auth.token}`  
    }}).then((res) => {
      console.log(res.data);
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
  console.log(state);
  return (
    <homeContext.Provider value={{ state, dispatch }}>
      {children}
    </homeContext.Provider>
  );
}

export default HomeProductsContext;
