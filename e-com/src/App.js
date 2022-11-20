import Main from "./bodyContent/main.js";
import NavBar from "./navbar/NavbarContent.js";
import "bootstrap/dist/css/bootstrap.min.css";
import SignInPage from "./login";
import SignUpPage from "./register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <Main /> */}
      <Router>
        <NavBar />
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<Main />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/register" element={<SignUpPage />} />
          {/* <Route path="*" element={<NoPage />} /> */}
          {/* </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
