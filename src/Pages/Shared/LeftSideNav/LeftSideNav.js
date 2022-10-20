import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, sestCategories] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/news-category')
            .then(res => res.json())
            .then(data => sestCategories(data))
    }, [])
    return (
        <div>
            <h2>All category:{categories.length}</h2>
            {
                categories.map(category => <p key={category.id}>
                    <Link to={`/catagory/:${category.id}`}>{category.name}</Link>
                </p>)
            }

        </div>
    );
};

export default LeftSideNav;