import Main from "./bodyContent/main.js";
import NavBar from "./navbar/NavbarContent.js";
import "bootstrap/dist/css/bootstrap.min.css";
import SignInPage from "./login";
import SignUpPage from "./register";
import Cartitems from "./Cart/cartitems.js";
import Product from "./product_details/product.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        {/* <Product /> */}
        <Routes>
          <Route index element={<Main />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/cart" element={<Cartitems />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
