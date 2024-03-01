import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Products from "./pages/Products";
import HomeProductsContext from "./context/HomeProductsContext";
import RootContext from "./context/RootContext";
import Card from "./pages/Card";
import Order from "./pages/Order";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import { useContext } from "react";
import { contextUser } from "./context/UserContext";
import GetOrders from "./pages/GetOrders";
import AllOrders from "./pages/admin/AllOrders";
import EditOrder from "./pages/admin/EditOrder";
import AddProduct from "./pages/admin/addProduct";

function App() {

 

  return (
    <div className="App">
      <Navbar />
      <Routes>
       
       
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/orders" element={ <GetOrders />} />

<Route element={<ProtectedRoutes/>}>
        <Route path="/" element={ <Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/card" element={<Card />} />
        <Route path="/order" element={<Order />} />
        <Route path="/myorders" element={<GetOrders />} />
      <Route path='/allorders' element={<AllOrders/>}/>
      <Route path='/editorder/:id' element={<EditOrder/>}/>

      <Route path='/addproduct' element={<AddProduct/>}/>

</Route>



      </Routes>
    </div>
  
  );
}

export default App;
