import React from 'react';
import StatsItem from './StatsItem';

const StatsList = () => {
    return (
        <div className="gap-6 grid md:grid-cols-1 lg:grid-cols-2 mb-4">
            <StatsItem />
            <StatsItem />
        </div>
    );
};

export default StatsList;
