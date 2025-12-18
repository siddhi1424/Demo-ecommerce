import React, { use, useEffect, useState } from "react";

import Header from "./components/Header";

import ProductdataAPI from "./components/ProductdataAPI";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cartpage";

const App = () => {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    console.log("added to cart");
    const existingitem = cart.find((item) => item.id === product.id);
    if (existingitem) {
      setCart((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  //remove from cart
  const removefromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  //update quantity filter
  // App.js

  // update quantity function
  const updateQuantity = (productId, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        // Find the item to update
        if (item.id === productId) {
          // Calculate the new quantity, ensuring it never goes below 1
          const newQuantity = Math.max(1, item.quantity + delta);
          return {
            ...item,
            quantity: newQuantity,
          };
        }
        return item; // Return all other items unchanged
      })
    );
  };

  const totalitem = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <div>
      <BrowserRouter>
        <Header totalitem={totalitem} />
        <Routes>
          <Route
            path="/"
            element={<ProductdataAPI addToCart={addToCart} />}
          ></Route>
          <Route
            path="/Cart"
            element={
              <Cart
                cartItems={cart}
                deleteitem={removefromCart}
                updateitemqnt={updateQuantity}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
