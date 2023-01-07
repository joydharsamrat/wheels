import React from 'react';
import { FiEdit } from "react-icons/fi";
import EditProduct from '../EditProduct/EditProduct';

const AllProductsCard = ({ product, handelEditPrice }) => {
    const { name, price, description, img, _id } = product;

    return (
        <div className="w-96 bg-base-100 shadow-xl rounded-xl relative">
            <figure className='h-60 w-full '><img className='rounded-t-xl object-center object-cover h-full w-full' src={img} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-rose-500 font-bold'>${price}</p>
                <p>{description}</p>
            </div>
            <label htmlFor={_id} className='absolute bottom-3 right-3 cursor-pointer' title='Edit price'><FiEdit></FiEdit></label>

            <EditProduct product={product} handelEditPrice={handelEditPrice}></EditProduct>

        </div>
    );
};

export default AllProductsCard;