import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Navbar = () => {
      const { cart } = useSelector((state) => state);
    return (
        <div className="bg-blue-300">
            <div className="flex flex-row justify-between">
                <NavLink to={"/"}>
                    <div>
                        <img
                            src="https://codehelp-shopping-cart.netlify.app/logo.png"
                            alt=""
                            className="h-14"
                        />
                    </div>
                </NavLink>

                <div>
                    <NavLink to={"/"}>
                        <p>Home</p>
                    </NavLink>

                    <NavLink to={"/cart"}>
                        <div>
                            {
                                cart.length > 0 ?  <div>{cart.length}</div> : null

                           }
                            <FaShoppingCart />
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
