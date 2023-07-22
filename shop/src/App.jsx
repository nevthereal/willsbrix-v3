import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import Info from "./pages/Info";
import Product from "./pages/Product";

import { products } from "./productList";
import CartProvider from "./cartContext";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import Popup from "./components/Popup";

import { app } from "./firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
  signOut,
  signInAnonymously,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();
const handleGoogleSignIn = () => {
  signInWithPopup(auth, googleProvider)
    .then(() => {})
    .catch(() => {});
};
const handleSignOut = () => {
  signOut(auth)
    .then(() => {})
    .catch(() => {});
};

const handleAnonymSignIn = () => {
  signInAnonymously(auth)
    .then(() => {})
    .catch(() => {});
};

function App() {
  return (
    <div className='dark:bg-gray-800 dark:text-white'>
      <CartProvider>
        <Navbar
          handleGoogleSignIn={handleGoogleSignIn}
          handleSignOut={handleSignOut}
          handleAnonymSignIn={handleAnonymSignIn}
          auth={auth}
        />
        <Popup>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/info' element={<Info />} />
            <Route path='/success' element={<Success />} />
            <Route path='/cancel' element={<Cancel />} />
            {products.map((product, index) => (
              <Route
                key={index}
                path={`/products/${product.link}`}
                element={
                  <Product
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    parts={product.parts}
                    blPrice={product.blPrice}
                    img_main={product.img_main}
                    img_1={product.img_1}
                    img_2={product.img_2}
                    id={product.id}
                    designer={product.designer}
                  />
                }
              />
            ))}
          </Routes>
        </Popup>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
