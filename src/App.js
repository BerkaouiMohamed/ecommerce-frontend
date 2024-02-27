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

function App() {
 

  return (<RootContext >
    <div className="App">
      <Navbar />
      <Routes>
       
        <Route path="/" element={ <Home />} />
      
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/card" element={<Card />} />
        <Route path="/order" element={<Order />} />


      </Routes>
    </div>
    </RootContext>
  );
}

export default App;
