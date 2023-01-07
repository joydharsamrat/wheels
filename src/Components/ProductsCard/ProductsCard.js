import React from 'react';

const ProductsCard = ({ product }) => {
    const { name, price, description, img } = product;
    return (
        <div className="w-96 bg-base-100 shadow-xl rounded-xl">
            <figure className='h-60 w-full '><img className='rounded-t-xl object-cover h-full w-full' src={img} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-rose-500 font-bold'>${price}</p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;