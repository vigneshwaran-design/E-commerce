import { useState } from "react";
import Main from "./bodyContent/main.js";
import NavBar from "./navbar/NavbarContent.js";
import "bootstrap/dist/css/bootstrap.min.css";
import SignInPage from "./login";
import SignUpPage from "./register";
import Cartitems from "./Cart/cartitems.js";
import Product from "./product_details/product.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavItem } from "react-bootstrap";
function App() {
  const [cartitems, setcartitems] = useState([]);
  const [active, setActive] = useState(true);
  const [searchData, setSearchData] = useState("");
  const search = (props) => {
    setSearchData(props);
  };
  const handleAddProduct = (item) => {
    setActive(!active);
    const productexist = cartitems.find((item1) => item1.id === item.id);
    if (productexist) {
      setcartitems(
        cartitems.map((item1) =>
          item1.id === item.id
            ? { ...productexist, quantity: productexist.quantity + 1 }
            : item1
        )
      );
    } else setcartitems([...cartitems, { ...item, quantity: 1 }]);
  };
  const handleRemoveProduct = (item) => {
    const productexist = cartitems.find((item1) => item1.id === item.id);
    if (productexist.quantity === 1) {
      setcartitems(cartitems.filter((e) => e.id !== item.id));
    } else {
      setcartitems(
        cartitems.map((e) =>
          e.id === item.id
            ? { ...productexist, quantity: productexist.quantity - 1 }
            : e
        )
      );
    }
  };

  return (
    <div className="App">
      <Router>
        <NavBar cartItems={cartitems} searchHandler={search} />
        {/* <Product /> */}
        <Routes>
          <Route
            path="/main"
            element={
              <Main
                handleAddProduct={handleAddProduct}
                active={active}
                filterValue={searchData}
              />
            }
          />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route
            path="/cart"
            element={
              <Cartitems
                cartItems={cartitems}
                handleAddProduct={handleAddProduct}
                handleRemoveProduct={handleRemoveProduct}
              />
            }
          />
          <Route
            path="/product"
            element={
              <Product handleAddProduct={handleAddProduct} active={active} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
