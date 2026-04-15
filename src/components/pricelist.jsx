import React from 'react';

const PriceList = ({ plans }) => {
      const pricingPlans = Array.isArray(plans) ? plans : [];

      return (
            <section className="bg-gray-100 py-16">
                  <div className="mx-auto w-full max-w-6xl px-4">
                        <div className="text-center">
                              <h2 className="text-4xl font-bold tracking-tight text-slate-900">Simple, Transparent Pricing</h2>
                              <p className="mt-3 text-sm text-slate-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                        </div>

                        <div className="mt-10 grid gap-6 md:grid-cols-3">
                              {pricingPlans.map((plan) => {
                                    const isPopular = plan.badge === 'Most Popular';

                                    return (
                                          <div
                                                key={plan.id}
                                                className={isPopular
                                                      ? 'relative rounded-2xl bg-linear-to-b from-violet-600 to-purple-600 px-6 py-8 text-white shadow-md'
                                                      : 'relative rounded-2xl border border-slate-200 bg-white px-6 py-8 text-slate-800 shadow-sm'}
                                          >
                                                {isPopular && (
                                                      <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-amber-300 px-3 py-1 text-xs font-semibold text-slate-900">
                                                            {plan.badge}
                                                      </span>
                                                )}

                                                <h3 className="text-xl font-bold">{plan.name}</h3>
                                                <p className={isPopular ? 'mt-1 text-sm text-violet-100' : 'mt-1 text-sm text-slate-500'}>{plan.subtitle}</p>

                                                <div className="mt-5 flex items-end gap-1">
                                                      <span className="text-4xl font-bold">${plan.price}</span>
                                                      <span className={isPopular ? 'text-sm text-violet-100' : 'text-sm text-slate-500'}>/{plan.period}</span>
                                                </div>

                                                <ul className="mt-5 space-y-2 text-sm">
                                                      {(plan.features || []).map((feature) => (
                                                            <li key={feature} className="flex items-start gap-2">
                                                                  <span className={isPopular ? 'text-emerald-200' : 'text-emerald-500'}>✓</span>
                                                                  <span>{feature}</span>
                                                            </li>
                                                      ))}
                                                </ul>

                                                <button
                                                      className={isPopular
                                                            ? 'mt-6 btn btn-block rounded-3xl border-0 bg-white text-violet-700 hover:bg-slate-100'
                                                            : 'mt-6 btn btn-block rounded-3xl border-0 bg-violet-600 text-white hover:bg-violet-700'}
                                                >
                                                      {plan.cta}
                                                </button>
                                          </div>
                                    );
                              })}
                        </div>
                  </div>
            </section>
      );
};

export default PriceList;
