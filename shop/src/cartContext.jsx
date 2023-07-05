import { createContext, useEffect, useState } from "react"
import { products, getProductData } from "./productList"

export const CartContext = createContext({
    items: [],
    addOneToCart: () => {},
    removeFromCart: () => {},
    isInCart: () => {},
    getSubTotal: () => {},
})


export function CartProvider({children}) {

    const [cartProducts, setCartProducts] = useState(() => {
        const storedCartData = localStorage.getItem("cartProducts");
        return storedCartData ? JSON.parse(storedCartData) : [];
    })

    useEffect(() => {
        localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
    }, [cartProducts])
    
    const contextValue = {
        items: cartProducts,
        addOneToCart,
        removeFromCart,
        getSubTotal,
        isInCart
    }

    function isInCart(id) {
        return cartProducts.some((product) => product.id === id);
    }

    function addOneToCart(id) {
        if(!isInCart(id)) {
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        } else {
            alert("Item is already in the Cart")
        }
    }

    function removeFromCart(id) {
        setCartProducts(
            cartProducts => 
            cartProducts.filter(
                currentProduct => {
                    return currentProduct.id != id
                }
            )
        )
    }

    function getSubTotal() {
        let subTotal = 0
        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id)
            subTotal += productData.price
        })

        return subTotal
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider