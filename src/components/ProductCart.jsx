import React, { useState } from 'react'
import { BsCart3 } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart';

const ProductCart = (props) => {
    const carts = useSelector(store => store.cart.items);
    const [qty,setQty] = useState(1);
    console.log(carts);
    const { id, name, sku, price, quantity, type, weight, size } = props.data;
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart({
            productId: id,
            quantity: qty
        }));
    }
    const handleMinusQuantity = () => {
        setQty(qty - 1 < 1 ? 1 : qty - 1);
    }
    const handlePlusQuantity = () => {
        setQty(qty + 1);
    }
  return (
    <div className='bg-white p-5 rounder-xl shadow-sm'>
       {/* <div className='w-full h-80 object-cover object-top drop-shadow-[0_80px_30px_#0007'></div> */}
       <h3 className='text-2xl py-3 text-center font-medium'>{name}</h3>
       <div className='flex justify-between items-center'>
            <p className='text-2xl font-medium'>
                $<span className='text-2xl font-medium'>{price}</span>
            </p>
       </div>
       <div className='flex justify-between items-center'>
            <div className='flex gap-2 justify-center items-center'>
                <button className='bg-gray-100 h-full w-6 font-bold text-sm  flex justify-center items-center' onClick={handleMinusQuantity}>-</button>
                <span className='bg-white h-full w-6 font-bold text-sm  flex justify-center items-center'>{qty}</span>
                <button className='bg-gray-100 h-full w-6 font-bold text-sm  flex justify-center items-center' onClick={handlePlusQuantity}>+</button>
            </div>
            <button className='bg-gray-300 p-3 rounded-md text-sm hover:bg-gray-400 flex justify-between items-center' onClick={handleAddToCart}>
                <BsCart3 className='w-5' />
                Add To Cart
            </button>
       </div>

    </div>
  )
}

export default ProductCart