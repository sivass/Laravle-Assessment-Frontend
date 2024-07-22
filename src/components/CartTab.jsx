import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem';
import { toggleStatusTab } from '../stores/cart';
import calculateShipping from '../utils/calculateShipping';

const CartTab = () => {
    const carts = useSelector(store => store.cart.items);
    const subTotal = carts.reduce((sum, item) => sum + parseFloat(item.price), 0);
    const shipping = calculateShipping(carts);
    const Total    = parseFloat(subTotal) + parseFloat(shipping);
    const statusTab = useSelector(store => store.cart.statusTab);
    const dispatch = useDispatch();
    const handleCloseTab = () => {
        dispatch(toggleStatusTab())
    }
  return (
    <div className={`fixed top-0 right-0 bg-gray-700 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px] transform transition-transform duration-500 ${statusTab === false ? "translate-x-full" :""}`}>
        <h2 className='p-5 text-white text-2xl'>Shopping Cart</h2>
        <div className='p-5'>
            { carts.map((item, key) => 
            <CartItem key={key} data={item} />
            )}
            <div className=' py-10'>
                <div className='flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-lg'>
                    <h3>Sub Total</h3>
                    <p>${subTotal.toFixed(2)}</p>
                </div>
                <div className='flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-lg'>
                    <h3>Shipping Price</h3>
                    <p>${shipping.toFixed(2)}</p>
                </div>
                <div className='flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-lg'>
                    <h3>Total Price</h3>
                    <p>${Total.toFixed(2)}</p>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-2'>
            <button className='bg-black text-white' onClick={handleCloseTab}>CLOSE</button>
            <button className='bg-amber-600 text-white'>CHECKOUT</button>
        </div>
    </div>
  )
}

export default CartTab