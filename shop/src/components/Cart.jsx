import React, { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faXmark } from "@fortawesome/free-solid-svg-icons";

import Backdrop from "./Backdrop";
import CartItem from "./CartItem";

import { CartContext } from "../cartContext";

import { useAuthState } from "react-firebase-hooks/auth";

const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const Cart = ({
  handleClose,
  handleGoogleSignIn,
  handleSignOut,
  handleAnonymSignIn,
  auth,
}) => {
  const cart = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);
  const [showDelayedMessage, setShowDelayedMessage] = useState(false);
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    let timeoutId = null;
    if (isLoading) {
      timeoutId = setTimeout(() => {
        setShowDelayedMessage(true);
      }, 1500);
    } else {
      setShowDelayedMessage(false);
    }
    return () => clearTimeout(timeoutId);
  }, [isLoading]);

  const checkout = async () => {
    const userEmail = user.email;
    try {
      setIsLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_CHECKOUT_DOMAIN}/checkout`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ items: cart.items, userEmail }),
        }
      );

      const { url } = await response.json();

      if (url) {
        window.location.href = url;
        localStorage.removeItem("cartProducts");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Backdrop handleClose={handleClose}>
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className='w-[90%] h-fit max-h-[75%] bg-white dark:bg-gray-800 shadow-xl shadow-gray-200/75 dark:shadow-slate-700/75 px-4 py-10 m-auto rounded-2xl overflow-auto z-[1] max-w-6xl'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          variants={fadeIn}
        >
          <div className='flex justify-between max-w-5xl mx-auto'>
            <div className='text-left'>
              <h1 className='font-bold text-4xl'>Your Cart:</h1>
              <div className='flex gap-4'>
                {user ? (
                  <>
                    <p>
                      signed in{" "}
                      {user.email ? (
                        <span>as {user.email}</span>
                      ) : (
                        <span className='italic'>anonymously</span>
                      )}
                    </p>
                  </>
                ) : loading ? null : null}
              </div>
            </div>
            <FontAwesomeIcon
              className='cursor-pointer text-xl my-auto'
              icon={faXmark}
              onClick={handleClose}
            />
          </div>
          {loading ? (
            <span>Fetching user data</span>
          ) : user ? (
            <>
              <div className='flex flex-col gap-4 my-4'>
                {cart.items.length === 0 ? (
                  <p className='text-xl'>
                    There are no items in your cart.{" "}
                    <a href='/products' className='font-bold'>
                      Explore Products
                    </a>
                  </p>
                ) : (
                  <>
                    {cart.items.map((currentProduct, index) => (
                      <CartItem key={index} item={currentProduct} />
                    ))}
                  </>
                )}
              </div>
              {user.email ? (
                <button
                  onClick={handleSignOut}
                  className='font-bold border border-gray-400 p-2 rounded-lg py-1 px-2'
                >
                  Sign Out
                </button>
              ) : (
                <button
                  onClick={handleGoogleSignIn}
                  className='font-bold border border-gray-400 p-2 rounded-lg py-1 px-2'
                >
                  Sign in With Google
                </button>
              )}

              {cart.items.length > 0 ? (
                <>
                  <p className='font-semibold text-sm'>
                    Subtotal: {cart.getSubTotal().toFixed(2)} CHF
                  </p>
                  <button
                    className='border border-gray-400 py-1 px-2 rounded-lg hover:scale-105 duration-200 text-xl font-bold mt-2'
                    onClick={checkout}
                  >
                    {isLoading ? (
                      <span className='cursor-wait'>
                        Loading <FontAwesomeIcon icon={faSpinner} spin />
                      </span>
                    ) : (
                      <span>Checkout</span>
                    )}
                  </button>
                </>
              ) : null}
              {isLoading && showDelayedMessage && (
                <p className='italic'>
                  Sometimes server requests can take a little longer. If so, be
                  patient ...
                </p>
              )}
            </>
          ) : (
            <div className='my-4'>
              <button
                onClick={handleGoogleSignIn}
                className='font-bold text-2xl border border-gray-400 p-2 rounded-lg py-1 px-2'
              >
                Log in with <span className='font-black'>Google</span>
              </button>
              <p>or</p>
              <button
                className='font-bold text-2xl border border-gray-400 p-2 rounded-lg py-1 px-2'
                onClick={handleAnonymSignIn}
              >
                Sign in as a guest
              </button>
            </div>
          )}
        </motion.div>
      </Backdrop>
    </div>
  );
};

export default Cart;
