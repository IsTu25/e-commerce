import React, { useContext } from "react";
import "./CartItem.css";
import remove_icon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";

export const CartItem = () => {
  const { getTotalCartAmount,cartItem, removeFromCart, all_products } = useContext(ShopContext);

  const hasItems = Object.values(cartItem).some((count) => count > 0);

  return (
    <div className="cartitems">
      <h2>Your Cart</h2>
      {!hasItems ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <hr />
          {all_products.map((e) => {
            if (cartItem[e.id] > 0) {
              return (
                <React.Fragment key={e.id}>
                  <div className="cartitems-format">
                    <img
                      src={e.image}
                      alt={e.name}
                      className="carticon-product"
                    />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <span className="cartitems-quantity">{cartItem[e.id]}</span>
                    <p>${(e.new_price * cartItem[e.id]).toFixed(2)}</p>
                    <img
                      src={remove_icon}
                      alt="Remove"
                      onClick={() => removeFromCart(e.id)}
                      className="cartitems-remove-icon"
                    />
                  </div>
                  <hr />
                </React.Fragment>
              );
            }
            return null;
        })}
        <div className="cartitems-down">
            <div className="classitem-total">
                <h1>Cart Total</h1>
                <div>
                    <div className="cartitem-total-item">
                        <p>
                            Subtotal
                        </p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitem-total-item">
                        <p>Shipping Free</p>
                        <p>Free</p>
                    </div>

                </div>
                <hr />
                <div className="cartitem-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>PROCCED TO CHECK OUT</button>
        </div>
        <div className="cartitems-promocode">
            <p>If you had a promo code,Enter it here!</p>
            <div className="cartitem-promobox">
                <input type ="text" placeholder="Promo Code"/>
                <button>Submit</button>
            </div>
        </div>
        </>
      )}
    </div>
  );
};
