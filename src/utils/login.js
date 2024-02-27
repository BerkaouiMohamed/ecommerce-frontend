import axios from "axios";
import { useContext } from "react";
import { toast } from "react-toastify";
import { contextUser } from "../context/UserContext";


function hundleLogin(e,userlogin,navigate,setLoading,setUser) {


    setLoading(true)
      axios
        .post("http://localhost:5000/api/auth/login", 
        userlogin
  
        )
        .then((res) =>
        {
          console.log(res.data);
          if(res.data.status=="error") {
            toast(res.data.data);
          }
          else{
            toast("welcome");
            setTimeout(()=>{ navigate('/')},1000)

            setUser(res.data.data)
            localStorage.setItem("user",JSON.stringify(res.data.data))
            
          }


        })
        setLoading(false)
      
  }
  export default hundleLogin