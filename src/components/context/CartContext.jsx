import { useState } from "react";
import CreateCartContext from "./CreateCartContext";

const { Provider } = CreateCartContext

function CartContextProvider({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = (product, count) => {
        if (product && product.id) {

            const existingProductIndex = cart.findIndex((item) => item.id === product.id);

            if (existingProductIndex !== -1) {

                const newCart = [...cart];
                newCart[existingProductIndex].qty += count;
                setCart(newCart);
            } else {

                setCart([...cart, { ...product, qty: count, id: product.id }]);
            }
        }
    }

    const qtyCart = () => {
        const totalQty = cart.reduce((acc, current) => acc + (current.qty || 0), 0);
        return isNaN(totalQty) ? "0" : totalQty.toString();
    }
    const removeTCart = (id) => {
        const newCart = cart.filter(e => e.id !== id)
        setCart(newCart)
    }
    const incrementCart = (id) => {
        const newCart = [...cart]
        const index = cart.findIndex(e => e.id === id)
        newCart[index].qty++
        setCart(newCart)
    }
    const decrementCart = (id) => {
        const newCart = [...cart];
        const index = cart.findIndex(e => e.id === id);

        if (newCart[index].qty > 1) {
            newCart[index].qty--;
        } else {

            newCart.splice(index, 1);
        }
        setCart(newCart);
    }

    return (
        <Provider value={{ cart, addToCart, qtyCart, removeTCart, incrementCart, decrementCart }}>
            {children}
        </Provider>
    )
}

export default CartContextProvider



