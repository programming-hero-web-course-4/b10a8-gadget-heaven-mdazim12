import { Link, NavLink } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { BsCart } from "react-icons/bs";






const Navbar = () => {
    return (
        <div className="navbar bg-[#9538E2] ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        

                        <NavLink to = '/'>Home</NavLink>
                        
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl text-white">
                    <Link to = '/'>Have Gadget</Link>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                        
                       <li> <NavLink to = '/'>Home</NavLink></li>
                       
                </ul>
            </div>
            <div className="navbar-end">
           
           <span className="bg-white p-2 text-lg rounded-full m-2">
                 <BsCart />
           </span>

           <span className="bg-white p-2 text-lg rounded-full m-2">
                <CiHeart />
           </span>
            
                

            </div>
        </div>
    );
};

export default Navbar;