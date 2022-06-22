import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from  '../Context/CartContext';
import './Cart.css';

const Cart = () => {

  const [isPay, setIsPay] = useState(false); // disabled button
  const [status, setStatus] = useState(false); // return payment status
  const handlePayment = () => {
    setIsPay(true);
    addToCart([{}]);
    setStatus(true);
  };

  const {myCart, addToCart, total, setTotal} = useContext(CartContext);

  const handleClear = () => {
    setTotal(0);
    addToCart([{}]);
  }

  const navigate = useNavigate();
  const handleBackHome = () => {
    navigate("/");
  }

  return (
    <>
      <section className="cart-container">
        <div className="cart-header">CHECKOUT: </div>
        <div className="cart-items">
          {myCart.slice(1).map((items) => {
            return (
              <div className="cart-item">
                <img src={items.imageUrl} className="cart-item-img"  alt="Not found!" />
                {items.name} : {items.price}$
              </div>
              )
          })}
          {
            status ? <div className="cart-total">Payment Successful!</div> : 
            <div className="cart-total">Total: {total}$</div>
          }
        </div>
        <div className="cart-clearAndPay">
          <button className="cart-checkout" onClick={handleClear}>Clear</button>
          {
            isPay ? 
            <button disabled className="cart-paid">Paid</button>:
            <button className="cart-pay" onClick={handlePayment} setTotal={setTotal}>Pay</button> 
          }
        </div>
        <button className="cart-gohome" onClick={handleBackHome}>Return Home</button>
      </section>
    </>
  )
}

export default Cart
