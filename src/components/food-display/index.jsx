import { useContext } from 'react';
import './style.css'
import { StoreContext } from '../../context';
import FoodItem from '../food-item';

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
     <h2>Top dishes near you</h2>
     <div className="food-display-list">
      {food_list.map((item,index)=>{
        // eslint-disable-next-line no-cond-assign, no-constant-condition, no-constant-binary-expression
        if (category="All" || category===item.category){
         return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
        }
        
      })}
     </div>
    </div>
  )
}

export default FoodDisplay;