import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../Shared/NewsSummaryCard/NewsSummaryCard';

const Home = () => {
    const allnews = useLoaderData();
    return (
        <div>
            <h3>Home page has only {allnews.length} data item</h3>
            {
                allnews.map(news => <NewsSummaryCard
                    key={news._id}
                    news={news}
                ></NewsSummaryCard>)
            }
        </div >
    );
};

export default Home;