import React from 'react';
import FindBanner from '../../components/Islands/FindBanner';
import IslandCards from '../../components/Home/IslandCards';
import Discover from '../../components/Islands/Discover';

const Islands = () => {
    return (
        <div>
            <FindBanner />
            <IslandCards />
            <Discover />
        </div>
    );
};

export default Islands;