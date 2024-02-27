import React from "react";
import HomeProductsContext from "./HomeProductsContext";
import AllProductsContext from "./AllProductsContext";
import UserContext from "./UserContext";
import CardContext from "./CardContext";

function RootContext({ children }) {
  return (
    <CardContext>
      <UserContext>
        <HomeProductsContext>
          <AllProductsContext>{children}</AllProductsContext>
        </HomeProductsContext>
      </UserContext>
    </CardContext>
  );
}

export default RootContext;
