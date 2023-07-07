import { createContext, useEffect, useState } from "react"
import { getProductData } from "./productList"
import { useNavigate } from "react-router-dom"

export const CartContext = createContext({
    items: [],
    addOneToCart: () => {},
    removeFromCart: () => {},
    isInCart: () => {},
    getSubTotal: () => {},
})


export function CartProvider({children}) {

    let navigate = useNavigate()

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
        let itemName = getProductData(id).title
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
        alert(`Item "${itemName}" was added to Cart`)
        navigate("/products")
    }

    function removeFromCart(id) {
        let itemName = getProductData(id).title
        setCartProducts(
            cartProducts => 
            cartProducts.filter(
                currentProduct => {
                    return currentProduct.id != id
                }
            )
        )
        alert(`Item "${itemName}" was removed from Cart`)
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