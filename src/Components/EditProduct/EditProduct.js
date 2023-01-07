import React from 'react';

const EditProduct = ({ product, handelEditPrice }) => {
    const { name, price, _id } = product;

    const editPrice = (e) => {
        e.preventDefault()
        const newPrice = e.target.price.value;
        handelEditPrice(newPrice, _id)
    }

    return (
        <div>
            <input type="checkbox" id={_id} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor={_id} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={editPrice}>
                        <label htmlFor="price">Price</label>
                        <br />
                        <input id='price' name='price' type="number" defaultValue={price} required className="input input-bordered w-full max-w-xs" />
                        <br />
                        <input type="submit" value="Save" className='btn btn-xs mt-5' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;