import { NavLink, Outlet } from "react-router-dom";



const AllProduct = ({ category }) => {
    return (
        <div className="container mx-auto">
            <div>
                <h2 className="text-4xl font-bold text-center">Explore Cutting-Edge Gadgets</h2>
            </div>

            <div className="flex gap-4 justify-center">
                <div className="w-2/12 shadow-xl rounded-2xl mx-auto text-center">
                    {
                        category.map((item, index) => (
                            <div key={item.id || index} role="tablist" className="tabs tabs-lifted tabs-lg mx-auto text-center p-3">

                                <NavLink role="tab" to={`/category/${item.name}`} className={"border-2 p-2  text-center  bg-gray-200 text-gray-600 font-medium rounded-3xl w-[150px]"}>{item.name}</NavLink>
                            </div>
                        ))
                    }
                </div>

                <div className="w-10/12">
                    <Outlet></Outlet>
                </div>
            </div>




        </div>
    );
};

export default AllProduct;