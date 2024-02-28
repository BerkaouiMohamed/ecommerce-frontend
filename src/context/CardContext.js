import React, { createContext, useReducer } from "react";

export const contextCard = createContext();
const cardReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CARD": {
      const prod = state.find((element) => {
        return element.product._id == action.payload.product._id;
      });
      return prod ? state : [...state, action.payload];
    }

    case "INCREASE_QUANTITY": {
      return state.map((element) => {


        if (element.product._id == action.payload.product._id) {
          return { ...element, quantity: element.quantity + 1 };
        } else return element;
      });
    }
    case "DECREASE_QUANTITY":{
        return state.map((element)=>{

            if(element.product._id==action.payload.product._id)
            {
                if(element.quantity>1)
                return  {...element,quantity:element.quantity-1}
            else{
                return element
            }
            }
            else return element
        })}
    case "DELETE_PRODUCT":return state.filter((element)=>{
        console.log(action.payload,"payload");
        return element.product._id!=action.payload.product._id
    })
    default:
      return state;
  }
};

function CardContext({ children }) {

  const [card, dispatchCard] = useReducer(cardReducer, []);

  return (
    <contextCard.Provider value={{ card, dispatchCard }}>
      {children}
    </contextCard.Provider>
  );
}

export default CardContext;
