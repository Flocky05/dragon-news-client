import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = ({ params }) => {
    const CategoryNews = useLoaderData()
    return (
        <div>
            <h2>this is category section has {CategoryNews.length} data iteam</h2>
            {
                CategoryNews.map(news => <NewsSummaryCard
                    key={news._id}
                    news={news}></NewsSummaryCard>
                )}
        </div>
    );
};

export default Category;