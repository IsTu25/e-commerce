import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";
import { Product } from "../Pages/Product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) {
    cart[all_product[index].id] = 0;
  }
  return cart;
};

const ShopContextProvider = ({ children }) => {
  const [cartItem, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemID) => {
    setCartItems((prev) => {
      const updated = { ...prev, [itemID]: prev[itemID] + 1 };
      console.log("Cart Updated: ", updated);
      return updated;
    });
  };

  const removeFromCart = (itemID) => {
    setCartItems((prev) => ({
      ...prev,
      [itemID]: prev[itemID] > 0 ? prev[itemID] - 1 : 0,
    }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        const itemInfo = all_product.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItem[item];
        }
      }
    }
    return totalAmount; // ✅ Correct position
  };

  const TotalCartItem = () =>{
    let totalItem=0;
    for(const item in cartItem){
      if(cartItem[item]>0){
        totalItem+=cartItem[item];
      }
    }
    return totalItem;
  }
  

  const contextValue = {
    all_products: all_product,
    cartItem,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    TotalCartItem,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
