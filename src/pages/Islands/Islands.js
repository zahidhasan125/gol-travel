import React from 'react';
import FindBanner from '../../components/Islands/FindBanner';
import IslandCards from '../../components/Home/IslandCards';
import Discover from '../../components/Islands/Discover';
import Subscribe from '../../components/Islands/Subscribe';

const Islands = () => {
    return (
        <div>
            <FindBanner />
            <IslandCards />
            <Discover />
            <Subscribe />
        </div>
    );
};

export default Islands;