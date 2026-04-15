import React, { useState } from 'react';

const Products = ({ products, cartItems, addToCart, removeFromCart, clearCart }) => {
      const productList = Array.isArray(products) ? products : [];
      const [activeView, setActiveView] = useState('products');

      const cartTotal = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);

      const handleCheckout = () => {
            alert(`Proceeding to checkout with $${cartTotal}`);
            clearCart();
            setActiveView('products');
      };

      return (
            <section className="py-12">
                  <div className="mx-auto mb-8 max-w-3xl text-center">
                        <h2 className="text-4xl font-bold text-slate-900">Premium Digital Tools</h2>
                        <p className="mt-3 text-sm text-slate-500">
                              Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
                        </p>

                        <div className="mt-6 flex items-center justify-center gap-3">
                              <button
                                    type="button"
                                    className={activeView === 'products' ? 'btn btn-md rounded-full border-0 bg-violet-600 px-8 text-white hover:bg-violet-700' : 'btn btn-md rounded-full border border-violet-600 bg-transparent px-8 text-violet-600 hover:bg-violet-50'}
                                    onClick={() => setActiveView('products')}
                              >
                                    Products
                              </button>
                              <button
                                    type="button"
                                    className={activeView === 'cart' ? 'btn btn-md rounded-full border-0 bg-violet-600 px-8 text-white hover:bg-violet-700' : 'btn btn-md rounded-full border border-violet-600 bg-transparent px-8 text-violet-600 hover:bg-violet-50'}
                                    onClick={() => setActiveView('cart')}
                              >
                                    Cart ({cartItems.length})
                              </button>
                        </div>
                  </div>

                  {activeView === 'products' && (
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                              {productList.map((product) => (
                                    <div key={product.id} className="card w-96 bg-base-100 shadow-sm">
                                          <div className="card-body">
                                                <div className='flex justify-end'>
                                                      <span className="badge badge-xs badge-warning justify-end">{product.tag}</span>
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
                                                      <button onClick={() => addToCart(product)} className="btn btn-primary btn-block rounded-3xl">Buy Now</button>
                                                </div>
                                          </div>
                                    </div>
                              ))}
                        </div>
                  )}

                  {activeView === 'cart' && (
                        <div className="mx-auto max-w-2xl">
                              {cartItems.length > 0 ? (
                                    <>
                                          <h3 className="mb-6 text-2xl font-bold text-slate-900">Your Cart</h3>
                                          <div className="space-y-4">
                                                {cartItems.map((item) => (
                                                      <div key={item.id} className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4">
                                                            <div className="flex items-center gap-4">
                                                                  <img src={item.icon} alt={item.name} className="h-12 w-12" />
                                                                  <div>
                                                                        <p className="font-semibold text-slate-900">{item.name}</p>
                                                                        <p className="text-sm text-slate-500">${item.price}</p>
                                                                  </div>
                                                            </div>
                                                            <button onClick={() => removeFromCart(item.id)} className="text-pink-500 hover:text-pink-700 font-medium">
                                                                  Remove
                                                            </button>
                                                      </div>
                                                ))}
                                          </div>

                                          <div className="mt-8 border-t border-slate-200 pt-4">
                                                <div className="mb-6 flex justify-between">
                                                      <span className="text-slate-600">Total:</span>
                                                      <span className="text-2xl font-bold text-slate-900">${cartTotal}</span>
                                                </div>
                                                <button onClick={handleCheckout} className="btn btn-primary btn-block rounded-3xl">
                                                      Proceed to Checkout
                                                </button>
                                          </div>
                                    </>
                              ) : (
                                    <div className="mt-12 text-center">
                                          <p className="text-lg font-semibold text-slate-600">Your Cart is Empty</p>
                                          <p className="mt-2 text-sm text-slate-500">Add items to your cart to get started.</p>
                                    </div>
                              )}
                        </div>
                  )}
            </section>
      );
};

export default Products;