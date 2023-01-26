import './App.css';
// react router v6
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// pages
import { Home, CategoryProduct, ProductSingle, Cart, Registration, Login1, Search, CheckOutPage, PaymentPage, LandingPage } from "./pages/index";
// components
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import store from "./store/store";
import { Provider } from "react-redux";
import Navbar1 from './components/Navbar/Navbar1';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          {/* <Navbar1 /> */}
          <Sidebar />
          <Routes>
            {/* home page route */}
            <Route path="/" element={<Home />} />

            <Route path='/landingpage' element={<LandingPage />} />

            <Route path="/registration" element={<Registration />} />

            <Route path="/login" element={<Login1 />} />

            {/* category wise product listing route */}
            <Route path="/category/:category" element={<CategoryProduct />} />

            {/* single product route */}
            <Route path="/product/:id" element={<ProductSingle />} />

            {/* cart */}
            <Route path="/cart" element={<Cart />} />

            <Route path="/checkout" element={<CheckOutPage />} />
            <Route path="/payment" element={<PaymentPage />} />

            {/* searched products */}
            <Route path="/search/:searchTerm" element={<Search />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
