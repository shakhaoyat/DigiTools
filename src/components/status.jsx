import React from 'react';

const status = () => {
      return (
            <div className='w-full flex justify-center items-center py-4 bg-violet-600 '>
                  <div className="stats stats-vertical lg:stats-horizontal w-full shadow justify-self-auto items-center">
                        <div className="stat text-center text-fuchsia-50">
                              <div className="stat-value">50K+</div>
                              <div className="stat-title text-fuchsia-200">Active Users</div>
                        </div>

                        <div className="stat text-center text-fuchsia-50">
                              <div className="stat-value">200+</div>
                              <div className="stat-title text-fuchsia-200">Premium Tools</div>
                        </div>

                        <div className="stat text-center text-fuchsia-50">
                              <div className="stat-value">4.9</div>
                              <div className="stat-title text-fuchsia-200">Rating</div>
                        </div>
                  </div>
            </div>
      );
};

export default status;