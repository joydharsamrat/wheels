import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../../../Components/Spinner/Spinner';

const AddProducts = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imgHostKey = process.env.REACT_APP_ImgBB_Key;
    const handelAddProducts = (data, e) => {
        e.preventDefault();
        const name = data.name;
        const price = data.price;
        const description = data.description;
        const photo = data.photo[0];
        const formData = new FormData()
        formData.append('image', photo)
        setLoading(true)
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    const product = {
                        name,
                        price,
                        description,
                        img: data.data.url
                    }

                    fetch('https://wheels-server.vercel.app/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            setLoading(false)
                            console.log(data)
                            if (data.acknowledged) {
                                toast.success('Product added successfully')
                                navigate('/allProducts')
                            }
                        })
                        .catch(err => {
                            setLoading(false)
                            console.log(false)
                        })
                }
            })
    }

    return (
        <div className='mt-12'>
            <h1 className='text-4xl font-bold text-center mb-10'>Add New Product</h1>
            <form onSubmit={handleSubmit(handelAddProducts)} className=''>
                <div className=' lg:grid grid-cols-2 gap-20'>
                    <div className='flex flex-col gap-10'>
                        <input type="text" {...register("name", { required: "Name is required" })} placeholder="Product Name" className="input input-bordered w-full " />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                        <input type="number" {...register("price", { required: "Price is required" })} placeholder="Price" className="input input-bordered w-full " />
                        {errors.price && <p className='text-red-600'>{errors.price?.message}</p>}
                        <div>
                            <label className="label">
                                <span className="label-text">Select Product Photo</span>
                            </label>
                            <input type="file" {...register("photo", { required: "Photo is required" })} className="file-input file-input-bordered w-full" />
                            {errors.photo && <p className='text-red-600'>{errors.photo?.message}</p>}
                        </div>
                    </div>
                    <textarea {...register("description", { required: "Description is required" })} className="textarea textarea-bordered mt-10 lg:mt-0 w-full" placeholder="Product Description"></textarea>
                    {errors.description && <p className='text-red-600'>{errors.description?.message}</p>}
                </div>
                <div className='flex justify-center'>
                    {
                        loading ? <Spinner></Spinner> : <input type="submit" className='btn w-80 mt-10' value='Add' />
                    }
                </div>
            </form>
        </div>
    );
};

export default AddProducts;