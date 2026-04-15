import React from 'react';

const WorkFlowFooter = () => {
      return (
            <section className="bg-linear-to-r from-indigo-600 via-violet-600 to-fuchsia-600 py-20 text-white">
                  <div className="mx-auto max-w-4xl px-4 text-center">
                        <h2 className="text-4xl font-bold md:text-5xl">Ready To Transform Your Workflow?</h2>
                        <p className="mx-auto mt-4 max-w-2xl text-sm text-violet-100 md:text-base">
                              Join thousands of professionals who are already using DigiTools to work smarter.
                              Start your free trial today.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                              <button className="btn btn-sm rounded-full border-0 bg-white px-6 text-violet-700 hover:bg-violet-100">
                                    Explore Products
                              </button>
                              <button className="btn btn-sm rounded-full border border-white/60 bg-white/10 px-6 text-white hover:bg-white/20">
                                    View Pricing
                              </button>
                        </div>

                        <p className="mt-6 text-xs text-violet-200">
                              14-day free trial • No credit card required • Cancel anytime
                        </p>
                  </div>
            </section>
      );
};

export default WorkFlowFooter;
