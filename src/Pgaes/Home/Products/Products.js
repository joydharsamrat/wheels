import React, { useEffect, useState } from 'react';
import ProductsCard from '../../../Components/ProductsCard/ProductsCard';
import LargeSpinner from '../../../Components/Spinner/LargeSpinner';

const Products = () => {
    const [loading, setLoading] = useState(false)
    const [products, setProduct] = useState([])

    useEffect(() => {
        setLoading(true)
        fetch('https://wheels-server.vercel.app/products')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setLoading(false)
                setProduct(data)
            })
            .catch(err => {
                setLoading(false)
                console.log(err)
            })
    }, [])

    return (
        <div className='my-20 mx-20'>
            <h1 className='text-4xl font-bold text-center mb-12'>Products</h1>
            {
                loading ? <LargeSpinner></LargeSpinner> :
                    <div className='grid items-stretch grid-cols-3 gap-10 w-full'>
                        {
                            products.map(product => <ProductsCard key={product._id} product={product}></ProductsCard>)
                        }
                    </div>
            }
        </div>
    );
};

export default Products;