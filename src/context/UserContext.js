import React, {  createContext, useEffect, useState } from "react";

export const contextUser = createContext();
function UserContext({ children }) {
  const [auth, setAuth] = useState();
const local=localStorage.getItem('user')
useEffect(()=>{
    if(local){
        setAuth(JSON.parse(local))
      }
    else{
        setAuth(null)
    }
    
},[setAuth])
  return <contextUser.Provider
  value={{auth,setAuth}}>
    {children}
    </contextUser.Provider>;
}

export default UserContext;
