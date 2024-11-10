import { NavLink, Outlet } from "react-router-dom";

const AllProduct = ({ category }) => {
    return (
        <div className="container mx-auto">
            <div>
                <h2 className="text-4xl font-bold text-center">Explore Cutting-Edge Gadgets</h2>
            </div>

            <div className="flex gap-4 justify-center">
                <div className="w-2/12 shadow-xl rounded-2xl mx-auto text-center">
                    <div role="tablist" className="tabs tabs-lifted tabs-lg mx-auto text-center p-3">
                        {
                            category.map((item, index) => (
                                <NavLink
                                    key={item.id || index}
                                    role="tab"
                                    to={`/category/${item.name}`}
                                    className={({ isActive }) =>
                                        `border-2 p-2 text-center my-2 bg-gray-200 font-medium rounded-3xl w-[150px] ${isActive ? "bg-purple-600 text-white" : "text-gray-600"}`
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            ))
                        }
                    </div>
                </div>

                <div className="w-10/12">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AllProduct;
