import { createContext, useEffect, useState } from "react";
import { getProductData } from "./productList";
import { useNavigate } from "react-router-dom";

export const CartContext = createContext({
  items: [],
  addOneToCart: () => {},
  removeFromCart: () => {},
  isInCart: () => {},
  getSubTotal: () => {},
});

export function CartProvider({ children }) {
  let navigate = useNavigate();
  const [message, setMessage] = useState("");

  const getMessage = (item, action) => {
    return `${item} was ${action} Cart`;
  };

  const [cartProducts, setCartProducts] = useState(() => {
    const storedCartData = localStorage.getItem("cartProducts");
    return storedCartData ? JSON.parse(storedCartData) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);

  const contextValue = {
    items: cartProducts,
    addOneToCart,
    removeFromCart,
    getSubTotal,
    isInCart,
    message,
    setMessage,
  };

  function isInCart(id) {
    return cartProducts.some((product) => product.id === id);
  }

  function addOneToCart(id) {
    let itemName = getProductData(id).title;
    if (!isInCart(id)) {
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          quantity: 1,
        },
      ]);
    }
    setMessage(getMessage(itemName, "added to"));
    navigate("/products");
  }

  function removeFromCart(id) {
    let itemName = getProductData(id).title;
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id != id;
      })
    );
    setMessage(getMessage(itemName, "removed from"));
  }

  function getSubTotal() {
    let subTotal = 0;
    cartProducts.map((cartItem) => {
      const productData = getProductData(cartItem.id);
      subTotal += productData.price;
    });

    return subTotal;
  }

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
