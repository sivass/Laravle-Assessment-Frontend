import React  from "react";
import { BsCart3 } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart } from "../stores/cart";

const ProductCart = (props) => {
  const { id, name, sku, price, quantity, type, weight, size } = props.data;
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: id,
        quantity: 1,
        price: price,
        type: type,
        weight: weight,
        size: size,
        limit: quantity,
      })
    );
  };
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm flex flex-col justify-between h-full">
      {/* Image placeholder */}
      {/* <div className='w-full h-80 object-cover object-top drop-shadow-[0_80px_30px_#0007'></div> */}

      <div>
        <span
          className={`me-2 rounded px-2.5 py-0.5 text-xs font-medium uppercase ${
            type === 'physical' ? 'bg-blue-300 text-blue-800' : 'bg-slate-300 text-slate-800'
          }`}
        >
          {type}
        </span>
        <h3 className="text-lg font-semibold text-gray-900 py-2">{name}</h3>
        <div className="flex flex-col">
          <p className="text-xs font-normal uppercase">
            SKU: <span className="font-bold">{sku}</span>
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center py-2 mt-auto">
        <p className="text-lg font-medium">
          $<span className="text-lg font-medium">{price}</span>
        </p>
        <button
          className="bg-gray-300 p-3 rounded-md text-sm hover:bg-gray-400 flex justify-between items-center"
          onClick={handleAddToCart}
        >
          <BsCart3 className="w-5" />
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
