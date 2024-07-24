import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeQuantity } from '../stores/cart';

const CartItem = (props) => {
    const products = useSelector((state) => state.product.items);
    const { productId, quantity} = props.data;
    const [detail, setDetail] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        const findDetail = products.filter(product => product.id === productId)[0];
        setDetail(findDetail);
    },[productId]);

    const handleMinusQuantity = () => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity - 1
        }))
    }
    const handlePlusQuantity = () => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity + 1
        }))
    }
  return (
    <div className='flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-lg'>
        <h3>{detail.name}</h3>
        <p>${detail.price * quantity }</p>
        <div className='w-20 flex justify-between'>
            <button className='bg-white h-full w-6 font-bold text-sm text-cyan-500  flex justify-center items-center' onClick={handleMinusQuantity}>-</button>
            <span className='bg-white h-full w-6 font-bold text-sm  text-cyan-500 flex justify-center items-center'>{quantity}</span>
            <button className='bg-white h-full w-6 font-bold text-sm text-cyan-500  flex justify-center items-center' onClick={handlePlusQuantity}>+</button>
        </div>
    </div>
  )
}

export default CartItem