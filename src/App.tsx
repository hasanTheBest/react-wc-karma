import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Blog from "./Pages/Blog/Index";
import Cart from "./Pages/Cart/Cart";
import Category from "./Pages/Category/Category";
import Checkout from "./Pages/Checkout/Checkout";
import Contact from "./Pages/Contact/Contact";
import Product from "./Pages/Product/Product";
import Tracking from "./Pages/Tracking/Tracking";
import Login from "./Pages/Login/Login";
import Footer from "./Components/Footer";
import SingleBlog from "./Pages/Blog/SingleBlog";

function App() {
  // let element = useRoutes([{ path: "/", element: <Home /> }]);
  // return element;

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog-details" element={<SingleBlog />} />
        <Route path="shipping-cart" element={<Cart />} />
        <Route path="shop-category" element={<Category />} />
        <Route path="product-checkout" element={<Checkout />} />
        <Route path="contact" element={<Contact />} />
        <Route path="product-details" element={<Product />} />
        <Route path="confirmation" element={<Tracking />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
