import React from 'react';
import { CiShoppingCart } from "react-icons/ci";
import logoImage from '../assets/DigiTools.png';


const navBer = ({ cartCount = 0 }) => {
      return (
            <div>
                  <div className="navbar bg-base-100 shadow-sm">
                        <div className="navbar-start">
                              <div className="dropdown">
                                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                                    </div>
                                    <ul
                                          tabIndex="-1"
                                          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                          <li><a>Products</a></li>
                                          <li><a>Features</a></li>
                                          <li><a>Pricing</a></li>
                                          <li><a>Testimonials</a></li>
                                          <li><a>FAQ</a></li>
                                    </ul>
                              </div>
                              <img className="btn btn-ghost text-xl" src={logoImage} alt="DigiTools" />
                        </div>
                        <div className="navbar-center hidden lg:flex">
                              <ul className="menu menu-horizontal px-1">
                                    <li><a>Products</a></li>
                                    <li><a>Features</a></li>
                                    <li><a>Pricing</a></li>
                                    <li><a>Testimonials</a></li>
                                    <li><a>FAQ</a></li>
                              </ul>
                        </div>
                        <div className="navbar-end ">
                              <ul className='flex gap-2 items-center'>
                                    <li className="relative">
                                          <a href="" className="flex items-center gap-1">
                                                <CiShoppingCart className="text-xl" />
                                                {cartCount > 0 && <span className="badge badge-sm badge-primary">{cartCount}</span>}
                                          </a>
                                    </li>
                                    <li><a href="">Login</a></li>
                                    <li><a className="btn rounded-3xl  bg-purple-500">Get Started</a></li>
                              </ul>

                        </div>
                  </div>
            </div>
      );
};

export default navBer;