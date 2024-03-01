import React, { useContext, useEffect, useRef, useState } from "react";
import { contextUser } from "../../context/UserContext";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";

function EditOrder() {
  const { auth } = useContext(contextUser);
  const ref = useRef();
  const params = useParams();
  const navigate=useNavigate()
  const [order, setorder] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/order/${params.id}`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
      .then((res) => setorder(res.data.data))
      .catch((e) => console.log(e));
  }, [auth]);
  console.log(order);

  const hundleUpdate=(param)=>{
    axios.put(`http://localhost:5000/api/order/${params.id}`,{...order,status:param}, {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    }).then((res)=>console.log(res.data))
  }
  const hundleDelete=()=>{
    axios.delete(`http://localhost:5000/api/order/${params.id}`, {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    }).then((res)=>{ navigate('/allorders')})
  }

  return (
    <div>
      {order && (
        <>
          <p>user: {order.user.email}</p>
          <table>
            <tr>
              <th>prod</th>
              <th>quantity</th>
            </tr>
            {order.products.map((prod) => {
              return (
                <tr>
                  <td>{prod.product.title}</td>
                  <td>{prod.quantity}</td>
                </tr>
              );
            })}
          </table>

          <label htmlFor="">status:</label>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              hundleUpdate(ref.current.value);
            }}
            action=""
          >
            <Form.Select aria-label="Default select example" ref={ref}>
              <option>Open this select menu</option>
              <option
                value="pending"
                selected={order.status == "pending" ? true : false}
              >
                pending
              </option>
              <option
                value="completed"
                selected={order.status == "completed" ? true : false}
              >
                completed
              </option>
              <option
                value="cancelled"
                selected={order.status == "cancelled" ? true : false}
              >
                cancelled
              </option>
            </Form.Select>
            <input type="submit" value="edit" />
            <button onClick={hundleDelete} >delete</button>
          </form>
        </>
      )}
    </div>
  );
}

export default EditOrder;
