import { useLoaderData, useParams } from "react-router-dom";
import CardProduct from "../CardProduct/CardProduct";




const ProductCard = () => {

    const allProduct = useLoaderData();

    console.log(allProduct)

    const {category} = useParams();
    console.log(category)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                allProduct.map(product => <CardProduct key={product.product_id} product = {product}></CardProduct>)
            }
        </div>
    );
};

export default ProductCard;