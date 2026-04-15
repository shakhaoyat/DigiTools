import React from 'react';
import { FaInstagram, FaSquareFacebook, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
      return (
            <footer className="bg-slate-950 text-slate-300">
                  <div className="mx-auto w-full max-w-6xl px-6 py-12">
                        <div className="grid gap-10 md:grid-cols-5">
                              <div className="md:col-span-1">
                                    <h3 className="text-4xl font-bold text-white">DigiTools</h3>
                                    <p className="mt-4 text-sm leading-6 text-slate-400">
                                          Premium digital tools for creators,
                                          professionals, and businesses. Work smarter
                                          with our suite of powerful tools.
                                    </p>
                              </div>

                              <div>
                                    <h4 className="mb-3 text-sm font-semibold text-white">Product</h4>
                                    <ul className="space-y-2 text-sm text-slate-400">
                                          <li><a href="#" className="hover:text-white">Features</a></li>
                                          <li><a href="#" className="hover:text-white">Pricing</a></li>
                                          <li><a href="#" className="hover:text-white">Templates</a></li>
                                          <li><a href="#" className="hover:text-white">Integrations</a></li>
                                    </ul>
                              </div>

                              <div>
                                    <h4 className="mb-3 text-sm font-semibold text-white">Company</h4>
                                    <ul className="space-y-2 text-sm text-slate-400">
                                          <li><a href="#" className="hover:text-white">About</a></li>
                                          <li><a href="#" className="hover:text-white">Blog</a></li>
                                          <li><a href="#" className="hover:text-white">Careers</a></li>
                                          <li><a href="#" className="hover:text-white">Press</a></li>
                                    </ul>
                              </div>

                              <div>
                                    <h4 className="mb-3 text-sm font-semibold text-white">Resources</h4>
                                    <ul className="space-y-2 text-sm text-slate-400">
                                          <li><a href="#" className="hover:text-white">Documentation</a></li>
                                          <li><a href="#" className="hover:text-white">Help Center</a></li>
                                          <li><a href="#" className="hover:text-white">Community</a></li>
                                          <li><a href="#" className="hover:text-white">Contact</a></li>
                                    </ul>
                              </div>

                              <div>
                                    <h4 className="mb-3 text-sm font-semibold text-white">Social Links</h4>
                                    <div className="flex items-center gap-3">
                                          <a href="#" className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-900 hover:bg-slate-200" aria-label="Instagram">
                                                <FaInstagram className="h-4 w-4" />
                                          </a>
                                          <a href="#" className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-900 hover:bg-slate-200" aria-label="Facebook">
                                                <FaSquareFacebook className="h-4 w-4" />
                                          </a>
                                          <a href="#" className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-900 hover:bg-slate-200" aria-label="X">
                                                <FaXTwitter className="h-4 w-4" />
                                          </a>
                                    </div>
                              </div>
                        </div>

                        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-slate-800 pt-6 text-xs text-slate-500 md:flex-row md:items-center">
                              <p>© 2026 Digitools. All rights reserved.</p>
                              <div className="flex items-center gap-6">
                                    <a href="#" className="hover:text-slate-300">Privacy Policy</a>
                                    <a href="#" className="hover:text-slate-300">Terms of Service</a>
                                    <a href="#" className="hover:text-slate-300">Cookies</a>
                              </div>
                        </div>
                  </div>
            </footer>
      );
};

export default Footer;
