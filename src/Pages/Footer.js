import React from "react";

const Footer = () => {
     return (
          <footer className="bg-gray-500 text-white py-12">
               <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row md:justify-between mb-8">
                         {/* Contact Information */}
                         <div className="mb-4 md:mb-0">
                              <h3 className="text-lg font-bold mb-2">
                                   Contact Us
                              </h3>
                              <p className="mb-1">123 Construction Lane</p>
                              <p className="mb-1">Building City, BC 12345</p>
                              <p className="mb-1">
                                   Email: info@constructionco.com
                              </p>
                              <p>Phone: (123) 456-7890</p>
                         </div>

                         {/* Quick Links */}
                         <div className="mb-4 md:mb-0">
                              <h3 className="text-lg font-bold mb-2">
                                   Quick Links
                              </h3>
                              <ul className="space-y-1">
                                   <li>
                                        <a href="/" className="hover:underline">
                                             Home
                                        </a>
                                   </li>
                                   <li>
                                        <a
                                             href="/services"
                                             className="hover:underline"
                                        >
                                             Infrasturcture
                                        </a>
                                   </li>{" "}
                                   <li>
                                        <a
                                             href="/services"
                                             className="hover:underline"
                                        >
                                             Product
                                        </a>
                                   </li>
                                   <li>
                                        <a
                                             href="/services"
                                             className="hover:underline"
                                        >
                                             Projects
                                        </a>
                                   </li>
                                   <li>
                                        <a
                                             href="/services"
                                             className="hover:underline"
                                        >
                                             Careers
                                        </a>
                                   </li>
                                   <li>
                                        <a
                                             href="/services"
                                             className="hover:underline"
                                        >
                                             Services
                                        </a>
                                   </li>
                                   <li>
                                        <a
                                             href="/aboutus"
                                             className="hover:underline"
                                        >
                                             About
                                        </a>
                                   </li>
                                   <li>
                                        <a
                                             href="/contact"
                                             className="hover:underline"
                                        >
                                             Contact Us
                                        </a>
                                   </li>
                              </ul>
                         </div>

                         {/* Social Media */}
                         <div>
                              <h3 className="text-lg font-bold mb-2">
                                   Follow Us
                              </h3>
                              <div className="flex space-x-4">
                                   <a
                                        href="https://facebook.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-gray-400"
                                   >
                                        <i className="fab fa-facebook-f fa-lg"></i>
                                   </a>
                                   <a
                                        href="https://twitter.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-gray-400"
                                   >
                                        <i className="fab fa-twitter fa-lg"></i>
                                   </a>
                                   <a
                                        href="https://instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-gray-400"
                                   >
                                        <i className="fab fa-instagram fa-lg"></i>
                                   </a>
                                   <a
                                        href="https://linkedin.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-gray-400"
                                   >
                                        <i className="fab fa-linkedin-in fa-lg"></i>
                                   </a>
                              </div>
                         </div>
                    </div>

                    {/* Copyright */}
                    <div className="text-center">
                         <p className="text-sm">
                              &copy; {new Date().getFullYear()} Construction Co.
                              All rights reserved.
                         </p>
                    </div>
               </div>
          </footer>
     );
};

export default Footer;
