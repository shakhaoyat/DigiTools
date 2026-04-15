import React from 'react';
import userIcon from '../assets/user.png';
import packageIcon from '../assets/package.png';
import rocketIcon from '../assets/rocket.png';

const stepItems = [
      {
            id: '01',
            title: 'Create Account',
            description: 'Sign up for free in seconds. No credit card required to get started.',
            icon: userIcon,
      },
      {
            id: '02',
            title: 'Choose Products',
            description: 'Browse our catalog and select the tools that fit your needs.',
            icon: packageIcon,
      },
      {
            id: '03',
            title: 'Start Creating',
            description: 'Download and start using your premium tools immediately.',
            icon: rocketIcon,
      },
];

const Steps = () => {
      return (
            <section className="bg-gray-100 py-16">
                  <div className="mx-auto w-full max-w-6xl px-4">
                        <div className="text-center">
                              <h2 className="text-4xl font-bold tracking-tight text-slate-900">Get Started In 3 Steps</h2>
                              <p className="mt-3 text-sm text-slate-500">Start using premium digital tools in minutes, not hours.</p>
                        </div>

                        <div className="mt-10 grid gap-6 md:grid-cols-3">
                              {stepItems.map((step) => (
                                    <div key={step.id} className="relative rounded-2xl border border-slate-200 bg-white px-6 py-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                                          <span className="absolute right-4 top-4 inline-flex h-6 w-6 items-center justify-center rounded-full bg-violet-600 text-xs font-semibold text-white">
                                                {step.id}
                                          </span>

                                          <div className="mx-auto mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-violet-100">
                                                <img src={step.icon} alt={step.title} className="h-8 w-8 object-contain" />
                                          </div>

                                          <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                                          <p className="mt-3 text-sm leading-relaxed text-slate-500">{step.description}</p>
                                    </div>
                              ))}
                        </div>
                  </div>
            </section>
      );
};

export default Steps;
