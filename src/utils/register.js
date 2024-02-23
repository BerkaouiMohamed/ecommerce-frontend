import axios from "axios";
import { toast } from "react-toastify";

function hundleRegister(e,user,navigate,setLoading) {

    // const form = new FormData();
    // form.append("name", user.name);
    // form.append("email", user.email);
    // form.append("password", user.password);
    // form.append("image", user.image);

    // console.log(form.values());
    setLoading(true)
      axios
        .post("http://localhost:5000/api/auth/register", 
        user
          // headers: { "content-type": "multipart/form-data" },
        )
        .then((res) =>
        {
          console.log(res.data);
          if(res.data.status=="error") {
            toast(res.data.data);
          }
          else{
            toast("welcome");
            setTimeout(()=>{ navigate('/login')},1000)
          }
        })
        setLoading(false)
      
  }
  export default hundleRegister