import React from 'react';
import {addToLocalStorage, removeFromDb} from '../../utilities/fakeDb';
import './Cosmetic.css';

const Cosmetic = ({cosmetic , addProduct}) => {
    const {price , name , email} = cosmetic;

    const addToCart = (cosmetic)=>{
        
        addToLocalStorage(cosmetic.id);
        addProduct(cosmetic);

    }

    const removeFromCart = (cosmetic) =>{

        removeFromDb(cosmetic.id);
    }

    return (
        <div className='product'>

         <h3>Buy this: {name}</h3>
         <h4><small>Only for: {price}$</small></h4>
         <h5>Email: {email}</h5>
         <button onClick={()=>addToCart(cosmetic)}>Add to Cart</button>
         <button onClick={()=>removeFromCart(cosmetic)}>Remove</button>

        </div>
    );
};

export default Cosmetic;