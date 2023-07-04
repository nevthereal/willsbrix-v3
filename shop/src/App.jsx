import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Info from "./components/Info";
import ProductPage from "./components/product/Product"

import {products} from './productList'
import CartProvider from "./cartContext"
import Cart from "./components/cart/Cart";
import Success from "./components/Success";
import Cancel from "./components/Cancel";


function App() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/info" element={<Info />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
          {products.map((product, index) => (
            <Route
              key={index}
              path={`/products/${product.link}`}
              element={<ProductPage title={product.title} addToCart={product.addToCart} price={product.price} description={product.description} parts={product.parts} blPrice={product.blPrice} img_main={product.img_main} img_1={product.img_1} img_2={product.img_2} id={product.id} />}
            />
          ))}
        </Routes>
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
