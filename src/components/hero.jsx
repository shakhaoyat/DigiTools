import React from 'react';
import { CiPlay1 } from "react-icons/ci";


const hero = () => {
      return (
            <div>
                  <div className="hero bg-base-200 ">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                              <img
                                    src="/src/assets/banner.png"
                                    className="max-w-sm rounded-lg shadow-2xl"
                              />
                              <div>
                                    <h1 className="text-5xl font-bold">Supercharge Your <br />Digital Workflow</h1>
                                    <p className="py-6">
                                          Access premium AI tools, design assets, templates, and productivity<br />
                                          software—all in one place. Start creating faster today.

                                          Explore Products
                                    </p>
                                    <div className='flex gap-4'>
                                          <button className="btn btn-primary rounded-3xl">Explore Products</button>
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