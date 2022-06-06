import React, {useState, useContext} from 'react'
import { CartContext } from '../Context/CartContext';

const DogsCard = (props) => {
    const { name, breed, price, description, imageUrl } = props;
    const [isAdded, setIsAdded] = useState(false);
    const {addToCart, setTotal} = useContext(CartContext);
    const handleClick = () => {
        setIsAdded(true);
        const newItems = {
            name: name,
            price: price,
            imageUrl: imageUrl
        };
        addToCart((item) => [...item, newItems])
        setTotal((total) => total += Number(price))
    }


  return (
    <>
        <section className="dogs">
            <div className="dogs-info">
                <p>{name}</p>
                <p>{breed}</p>
            </div>
            <div className="dogs-img-container">
                <img className="dog-img" src={imageUrl} alt="" />
            </div>
            <div className="dogs-desc">{description}</div>
            <div className="dogs-price">{price}$</div>

            { isAdded ? (<button disabled className="dogs-btn-disabled">ADDED</button>):
            (<button className="dogs-btn" onClick={handleClick}>ADD TO CARD</button>)}
        </section>
    </>
  )
}

export default DogsCard