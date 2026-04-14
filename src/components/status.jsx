import React from 'react';

const status = () => {
      return (
            <div className='w-full flex justify-center items-center py-4 '>
                  <div className="stats stats-vertical lg:stats-horizontal w-full shadow justify-self-auto items-center">
                        <div className="stat text-center">
                              <div className="stat-value">50K+</div>
                              <div className="stat-title">Active Users</div>
                        </div>

                        <div className="stat text-center">
                              <div className="stat-value">200+</div>
                              <div className="stat-title">Premium Tools</div>
                        </div>

                        <div className="stat text-center">
                              <div className="stat-value">4.9</div>
                              <div className="stat-title">Rating</div>
                        </div>
                  </div>
            </div>
      );
};

export default status;