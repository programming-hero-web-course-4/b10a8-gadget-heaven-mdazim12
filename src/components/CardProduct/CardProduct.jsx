

const CardProduct = ({product}) => {

    const {product_image,product_title,price} = product;

    console.log(product);

    return (
        <div className="shadow-lg rounded-xl p-5 flex flex-col justify-between h-full">
        <img className="w-[150px] mx-auto object-cover" src={product_image} alt="" />
        <div className="mt-auto text-center">
            <h2 className="text-2xl font-bold">{product_title}</h2>
            <h3 className="text-xl font-medium my-3">Price: {price}</h3>
            <button className="btn btn-outline rounded-3xl px-4 py-2 mt-4">View Deatils </button>
        </div>
    </div>
    
    );
};

export default CardProduct;