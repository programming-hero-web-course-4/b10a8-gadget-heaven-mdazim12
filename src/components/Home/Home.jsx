import { useLoaderData } from "react-router-dom";
import AllProduct from "../All-Product/AllProduct";
import Banner from "../Banner/Banner";




const Home = () => {

    const category = useLoaderData();
    

    return (
        <div>
            <Banner></Banner>
            <AllProduct category = {category}></AllProduct>


        </div>
    );
};

export default Home;