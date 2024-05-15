import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { useEffect, useState } from "react";
import { Product } from "../models/product";

const AppRoutes = () => {
    const [initted, setInitted] = useState(false);
    const [cartItems, setCartItems] = useState<Product[]>([]);

    useEffect(() => {
        if (!initted) {
            setInitted(true);
            const ci = localStorage.getItem("cart-items");
            if (ci) {
                setCartItems(JSON.parse(ci));
            }
        }
    }, [initted]);

    const addItem = (item: Product) => {
        const _cardItems = [...cartItems, item];
        setCartItems(_cardItems);
        localStorage.setItem("cart-items", JSON.stringify(_cardItems));
    };

    const removeItem = (item: Product) => {
        const _cardItems = cartItems.filter((i) => i.name !== item.name);
        setCartItems(_cardItems);
        localStorage.setItem("cart-items", JSON.stringify(_cardItems));
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <HomePage
                            cartItems={cartItems}
                            addItem={addItem}
                            removeItem={removeItem}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
