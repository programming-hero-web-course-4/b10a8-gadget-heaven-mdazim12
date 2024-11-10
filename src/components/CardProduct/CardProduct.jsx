import { Link } from "react-router-dom";


const CardProduct = ({ product }) => {
    if (!product) {
        return (
            <div className="text-center font-bold text-3xl font-medium text-purple-700">
                No product found
            </div>
        );
    }

    const { product_id,product_image, product_title, price } = product;

    return (
        <div className="shadow-lg rounded-xl p-5 flex flex-col justify-between h-full">
            <img className="w-[150px] mx-auto object-cover" src={product_image} alt={product_title} />
            <div className="mt-auto text-center">
                <h2 className="text-2xl font-bold">{product_title}</h2>
                <h3 className="text-xl font-medium my-3">Price: {price}</h3>
                <Link to = {`/product/${product_id}`}><button className="btn btn-outline rounded-3xl px-4 py-2 mt-4">View Details</button></Link>
            </div>
        </div>
    );
};

export default CardProduct;
