import { useLoaderData, useParams } from "react-router-dom";
import Rating from 'react-rating-stars-component';
import { CiHeart } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import { addToStoredReadList, addToStoredWishList } from "../../Utility/AddToDB";
import { useState } from "react";



const Details = () => {


    const data = useLoaderData();

    const { product_id } = useParams();

    const handleCart = (id) => {

        addToStoredReadList(id);
    };

    const [WishButton, SetWishButton] = useState(false)

    const handleWish = (id) => {
        console.log('button clicked', id);
        addToStoredWishList(id);
        SetWishButton(true);
    }


    const products = data.find(product => product.product_id === product_id)

    const { product_title, product_image, price, description, Specification, availability, rating } = products;

    return (
        <div>
            <div className="bg-purple-600 py-5 text-center pb-32">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl text-white font-bold">Product Details</h2>
                    <p className="my-2 text-lg text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
            </div>

            <div className="flex items-center gap-5 max-w-5xl mx-auto shadow-2xl mb-5 rounded-2xl z-50 bg-white -mt-28">
                <div className="w-1/2">
                    <img src={product_image} alt="" />
                </div>

                <div className="w-1/2">
                    <h2 className="font-semibold text-3xl">{product_title}</h2>
                    <h2 className="font-semibold text-xl my-2"> Price: {price}</h2>
                    <h3 className={`font-semibold text-md my-2 ${availability ? "bg-[#309C08]" : "bg-red-500"} rounded-2xl py-2 px-4 inline-block text-white`}>
                        {availability ? "In Stock" : "Out of Stock"}
                    </h3>
                    <p className="text-lg text-gray-800">{description}</p>
                    <p className="text-xl font-bold my-2">Specification:</p>
                    {
                        Specification.map((feature, idx) => (
                            <p key={idx} className="text-lg text-gray-800">
                                {`${idx + 1}. ${feature}`}
                            </p>
                        ))
                    }

                    <p className="text-xl font-bold my-2">Rating:</p>

                    <Rating
                        count={rating}
                        value={rating}
                        size={24}
                        activeColor="#ffd700"
                        isHalf={true}
                        edit={false}
                    />

                    <div className="flex gap-4">
                        <button onClick={() => handleCart(product_id)}
                            className={`flex gap-3 items-center ${availability ? "bg-[#9538E2]" : "bg-gray-400 cursor-not-allowed"
                                } rounded-3xl text-xl text-white py-2 px-6 font-medium`}
                            disabled={!availability}
                        >
                            Add to cart <BsCart />
                        </button>


                        <button
                            onClick={() => handleWish(product_id)}
                            className={`inline-block p-3 rounded-full text-xl text-gray-600 border-gray-400 border-2 font-medium ${WishButton ? 'bg-gray-300 cursor-not-allowed' : ''}`}
                            disabled={WishButton}
                        >
                            <CiHeart />
                        </button>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Details;