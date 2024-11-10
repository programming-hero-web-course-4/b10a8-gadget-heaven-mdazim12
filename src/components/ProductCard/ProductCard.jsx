import { useLoaderData, useParams } from "react-router-dom";
import CardProduct from "../CardProduct/CardProduct";
import { useEffect, useState } from "react";

const ProductCard = () => {
    const allProduct = useLoaderData(); // Load all products from the loader
    const { category } = useParams(); // Get the category from URL parameters
    const [product, setProduct] = useState(allProduct || []); // Initialize state with all products

    useEffect(() => {
        if (allProduct) {
            // If no category is specified, show all products
            const filteredProducts = (!category || category === "All") 
                ? allProduct 
                : allProduct.filter(product => 
                    product.category?.trim().toLowerCase() === category.trim().toLowerCase()
                );
            setProduct(filteredProducts); // Set the filtered products to state
        }
    }, [category, allProduct]);

    return (
        <div className="container mx-auto my-8">
            {product.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {product.map(product => (
                        <CardProduct key={product.product_id} product={product} />
                    ))}
                </div>
            ) : (
                <CardProduct product={null} />
            )}
        </div>
    );
};

export default ProductCard;
