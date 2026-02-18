import './styles.css'
import { assets } from '../../utiles/image';
import { useContext } from 'react';
import { StoreContext } from '../../context';

const FoodItem = ({ id, name, price, description, image }) => {
    const { cartItems, addtoCart, removeFromCart } = useContext(StoreContext)
    console.log(id, "id");

    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className='food-item-image' src={image} alt="image" />
                {!cartItems[id]
                    ? <img className='add' onClick={() => addtoCart(id)} src={assets.add_icon_white} alt="icon" />
                    : <div className='food-item-counter'>
                        <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="icon" />
                        <p>{cartItems[id]}</p>
                        <img onClick={() => addtoCart(id)} src={assets.add_icon_green} alt="icon" />
                    </div>
                }
            </div>
            <div className='food-item-info'>
                <div className='food-item-name-rating'>
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="image" />
                </div>
                <p className='food-item-desc'>{description}</p>
                <p className='food-item-price'>${price}</p>
            </div>
        </div>
    )
}

export default FoodItem;