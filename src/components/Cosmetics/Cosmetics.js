import React, { useEffect, useState } from 'react';
import { addValue } from '../../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';


const Cosmetics = () => {

   const [cosmetics , setCosmetics] = useState([]);
   const [sCosmetic , setSCosmetic] = useState([]);


   const addProduct = (cosmetic)=>{

    const newCart = [...sCosmetic , cosmetic];
    setSCosmetic(newCart);
   }

   useEffect(()=>{

           fetch('data.json')
           .then(res => res.json())
           .then(data => setCosmetics(data))
   },[])

   const total = cosmetics.reduce((initial , product) => initial+product.price , 0);
   const addProductPrice = sCosmetic.reduce((initial , product) => initial+product.price , 0);

    return (
        <div>
            <h1>Total product cost: {total}$</h1>
            <h2>Selected product price: {addProductPrice}</h2>
            {
                cosmetics.map(cosmetic => <Cosmetic cosmetic={cosmetic} addProduct={addProduct} key={cosmetic.id}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;