import React from 'react';

const status = () => {
      return (
            <div className='w-full flex justify-center items-center'>
                  <div className="stats stats-vertical lg:stats-horizontal w-full shadow justify-self-auto items-center">
                        <div className="stat text-center">
                              <div className="stat-title">Downloads</div>
                              <div className="stat-value">31K</div>
                              <div className="stat-desc">Jan 1st - Feb 1st</div>
                        </div>

                        <div className="stat text-center">
                              <div className="stat-title">New Users</div>
                              <div className="stat-value">4,200</div>
                              <div className="stat-desc">↗︎ 400 (22%)</div>
                        </div>

                        <div className="stat text-center">
                              <div className="stat-title">New Registers</div>
                              <div className="stat-value">1,200</div>
                              <div className="stat-desc">↘︎ 90 (14%)</div>
                        </div>
                  </div>
            </div>
      );
};

export default status;