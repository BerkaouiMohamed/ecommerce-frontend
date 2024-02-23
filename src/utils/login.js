import axios from "axios";
import { toast } from "react-toastify";

function hundleLogin(e,user,navigate,setLoading) {


    setLoading(true)
      axios
        .post("http://localhost:5000/api/auth/login", 
        user
  
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
          }
        })
        setLoading(false)
      
  }
  export default hundleLogin