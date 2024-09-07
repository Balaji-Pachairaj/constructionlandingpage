import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
     return (
          <nav className="bg-gradient-to-r md:h-[75px] h-[100px] from-blue-500 via-blue-600 to-blue-700 text-white shadow-lg">
               <div className="container mx-auto px-4 py-4 flex md:flex-row flex-col  md:gap-[0rem] gap-[1rem]  justify-between items-center">
                    <div className="text-2xl font-bold">
                         <Link
                              to="/"
                              className="hover:text-yellow-300 transition duration-300"
                         >
                              Construction Co.
                         </Link>
                    </div>
                    <div className="space-x-6">
                         <Link
                              to="/"
                              className="hover:text-yellow-300 transition duration-300"
                         >
                              Home
                         </Link>
                         <Link
                              to="/services"
                              className="hover:text-yellow-300 transition duration-300"
                         >
                              Services
                         </Link>
                         <Link
                              to="/aboutus"
                              className="hover:text-yellow-300 transition duration-300"
                         >
                              About
                         </Link>
                         <Link
                              to="/contact"
                              className="hover:text-yellow-300 transition duration-300"
                         >
                              Contact Us
                         </Link>
                    </div>
               </div>
          </nav>
     );
};

export default Navbar;
