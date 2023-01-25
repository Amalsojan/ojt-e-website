import './App.css';
// react router v6
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// pages
import { Home, CategoryProduct,ProductSingle,Cart,Registration,Verify,Login,Search } from "./pages/index";
// components
import Navbar from './components/Navbar/Navbar';
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import store from "./store/store";
import { Provider } from "react-redux";


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Sidebar />
          <Routes>
            {/* home page route */}
            <Route path="/" element={<Home />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/login" element={<Login />} />

            {/* category wise product listing route */}
            <Route path="/category/:category" element={<CategoryProduct />} />

            {/* single product route */}
            <Route path="/product/:id" element={<ProductSingle />} />
            
            {/* cart */}
            <Route path = "/cart" element = {<Cart />} />
            
            {/* searched products */}
            <Route path = "/search/:searchTerm" element = {<Search />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
