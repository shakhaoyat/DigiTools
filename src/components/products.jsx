import React from 'react';

const products = ({ products }) => {
      const productList = Array.isArray(products) ? products : [];

      return (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {productList.map((product) => (
                        <div key={product.id} className="card w-96 bg-base-100 shadow-sm">
                              <div className="card-body">
                                    <div className='flex justify-end'>
                                          <span className="badge badge-xs badge-warning justify-end">{product.name}</span>
                                    </div>
                                    <div>
                                          <img className="mask mask-circle" src={product.icon} alt={product.name} />
                                    </div>

                                    <div className="flex justify-between">
                                          <h2 className="text-3xl font-bold">{product.name}</h2>
                                    </div>
                                    <div>
                                          <p>{product.description}</p>

                                          <span className="text-xl mt-4 block">${product.price}</span>
                                    </div>
                                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                                          {(product.features || []).map((feature) => (
                                                <li key={feature}>
                                                      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                      <span>{feature}</span>
                                                </li>
                                          ))}
                                    </ul>
                                    <div className="mt-6">
                                          <button className="btn btn-primary btn-block  rounded-3xl">Buy Now</button>
                                    </div>
                              </div>
                        </div>
                  ))}
            </div>
      );
};

export default products;