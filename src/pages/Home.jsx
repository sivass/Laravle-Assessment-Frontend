import React from 'react'
// import { products } from '../data/product'
import ProductCart from '../components/ProductCart'
import { useSelector } from 'react-redux'
import CardLoader from '../components/CardLoader';

const Home = () => {
    const products = useSelector((state) => state.product.items);
    const productStatus = useSelector((state) => state.product.status);
    const error = useSelector((state) => state.product.error);
    let content;

    if(productStatus === 'loading') {
        content = <CardLoader />;
    } else if(productStatus === 'succeeded'){
        content = products.map((product, key) => 
            <ProductCart key={key} data={product} />
        );
    }else if(productStatus === 'failed'){
        content = <p>{error}</p>
    }

  return (
    <div>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
           {content}
        </div>
    </div>
  )
}

export default Home