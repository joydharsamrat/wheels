import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import AllProductsCard from '../../Components/ProductsCard/AllProductsCard';
import LargeSpinner from '../../Components/Spinner/LargeSpinner';

const AllProducts = () => {
    const [loading, setLoading] = useState(false)
    const [products, setProduct] = useState([])
    const [isEdited, setIsEdited] = useState(false)
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
    }, [isEdited])

    const handelEditPrice = (price, _id) => {
        fetch(`https://wheels-server.vercel.app/products?id=${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setIsEdited(!isEdited)
                if (data.acknowledged) {
                    toast.success('Price Updated')
                }
            })
    }


    return (
        <div className='my-20 mx-20'>
            <h1 className='text-4xl font-bold text-center mb-12'>Products</h1>
            {
                loading ? <LargeSpinner></LargeSpinner> :
                    <div className='grid items-stretch grid-cols-3 gap-10 w-full'>
                        {
                            products.map(product => <AllProductsCard key={product._id} product={product} handelEditPrice={handelEditPrice} ></AllProductsCard>)
                        }
                    </div>
            }
        </div>
    );
};

export default AllProducts;