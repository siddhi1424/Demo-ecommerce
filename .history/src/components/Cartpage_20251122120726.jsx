import React from "react";
import styles from "./Cart.module.css";

const Cartpage = ({ cartItems, deleteitem, updateitemqnt }) => {
  const itemtotalprice = (item) => item.price * item.quantity;

  const grandTotal = cartItems.reduce((total, item) => {
    return total + itemtotalprice(item);
  }, 0);
  return (
    <div>
      {cartItems && cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <div className={styles.cartmain}>
              <img src={item.image} alt={item.title} />
              <h5>price-${item.price.toFixed(2)}</h5>
              <h5>Quantity: {item.quantity}</h5>
              <h5>Total: $ {itemtotalprice(item).toFixed(2)}</h5>
              <button onClick={() => updateitemqnt(item.id, 1)}>+</button>
              <button onClick={() => updateitemqnt(item.id, -1)}>-</button>
              <button onClick={() => deleteitem(item.id)}>❌</button>
            </div>
          ))}
          <div className={styles.grandtotal}>
            <h3>Grand Total :</h3>
            <span> $ {grandTotal.toFixed(2)}</span>
          </div>
        </>
      ) : (
        <p>Cart is Empty</p>
      )}
    </div>
  );
};

export default Cartpage;
