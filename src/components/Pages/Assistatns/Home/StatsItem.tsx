import React from 'react';

const StatsItem = () => {
    return (
        <div className="panel h-full flex-1 p-6">
            <div className="flex items-center justify-between dark:text-white-light mb-5">
                <h5 className="font-semibold text-lg">Usage</h5>
            </div>
            <div className="space-y-9">
                <div className="flex items-center">
                    <div className="flex-1">
                        <div className="flex font-semibold text-white-dark mb-2">
                            <h6>Overall</h6>
                            <p className="ltr:ml-auto rtl:mr-auto">$92,600</p>
                        </div>
                        <div className="rounded-full h-2 bg-dark-light dark:bg-[#1b2e4b] shadow">
                            <div className="bg-gradient-to-r from-[#7579ff] to-[#b224ef] w-11/12 h-full rounded-full"></div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="flex-1">
                        <div className="flex font-semibold text-white-dark mb-2">
                            <h6>Today</h6>
                            <p className="ltr:ml-auto rtl:mr-auto">$37,515</p>
                        </div>
                        <div className="w-full rounded-full h-2 bg-dark-light dark:bg-[#1b2e4b] shadow">
                            <div className="bg-gradient-to-r from-[#3cba92] to-[#0ba360] w-full h-full rounded-full" style={{ width: '65%' }}></div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="flex-1">
                        <div className="flex font-semibold text-white-dark mb-2">
                            <h6>Per chat</h6>
                            <p className="ltr:ml-auto rtl:mr-auto">$55,085</p>
                        </div>
                        <div className="w-full rounded-full h-2 bg-dark-light dark:bg-[#1b2e4b] shadow">
                            <div className="bg-gradient-to-r from-[#f09819] to-[#ff5858] w-full h-full rounded-full" style={{ width: '80%' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsItem;
