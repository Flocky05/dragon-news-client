import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const news = useLoaderData();
    console.log(news);
    return (
        <div>
            <h2>this is category section has {news.length} data iteam</h2>
        </div>
    );
};

export default Category;