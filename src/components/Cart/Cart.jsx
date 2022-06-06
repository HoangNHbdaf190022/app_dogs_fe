import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { CartContext } from  '../Context/CartContext'

const Cart = () => {

  const {myCart, addToCart, total, setTotal} = useContext(CartContext);
  const handleCheckout = () => {
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
          <div className="cart-total">Total: {total}$</div>
        </div>
        <button className="cart-checkout" onClick={handleCheckout}>Clear cart</button>
        <button className="cart-gohome" onClick={handleBackHome}>Return Home</button>
      </section>
    </>
  )
}

export default Cart