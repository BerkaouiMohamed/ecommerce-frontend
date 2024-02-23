import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Products from "./pages/Products";
import HomeProductsContext from "./context/HomeProductsContext";
import RootContext from "./context/RootContext";

function App() {
  const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDAyfQ.Awd_hi0oxEEfFqPUpgXEsolye_MLlYUPFAwIDHDoELU"
const decode=token.split('.')[1]
console.log(decode);
const {_id}=bota("hello")
console.log(_id);

  return (<RootContext >
    <div className="App">
      <Navbar />
      <Routes>
       
        <Route path="/" element={ <Home />} />
        
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
    </RootContext>
  );
}

export default App;
