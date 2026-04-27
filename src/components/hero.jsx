import React from 'react';
import { CiPlay1 } from "react-icons/ci";
import bannerImage from '../assets/banner.png';


const hero = () => {
      return (
            <div>
                  <div className="hero bg-base-200 ">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                              <img
                                    src={bannerImage}
                                    className="max-w-sm rounded-lg shadow-2xl"
                              />
                              <div>
                                    <div>
                                          <div className="flex ">
                                                <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-purple-100 text-purple-600 text-sm font-medium">
                                                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                                                      New: AI-Powered Tools Available
                                                </div>
                                          </div>
                                    </div>
                                    <h1 className="text-5xl font-bold">Supercharge Your <br />Digital Workflow</h1>
                                    <p className="py-6">
                                          Access premium AI tools, design assets, templates, and productivity<br />
                                          software—all in one place. Start creating faster today.

                                          Explore Products
                                    </p>
                                    <div className='flex gap-4'>
                                          <button className="btn  bg-purple-500 rounded-3xl">Explore Products</button>
                                          <button className="btn btn-outline btn-primary rounded-3xl"><CiPlay1 />
                                                Watch Demo</button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div >
      );
};

export default hero;