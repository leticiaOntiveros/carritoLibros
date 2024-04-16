import { createContext, useEffect, useState } from "react";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const [cart, setCart] = useState(savedCart);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        const productExist = cart.find((item) => item.id === product.id);
        if (productExist) {
            setCart(cart.map((item) => item.id === product.id ? { ...product, quanty: productExist.quanty + 1 } : item));

        } else {
            setCart([...cart, product]);
        }

    };

    return (
        <dataContext.Provider value={{ cart, setCart, addToCart }}>
            {children}
        </dataContext.Provider>
    )
};

export default DataProvider