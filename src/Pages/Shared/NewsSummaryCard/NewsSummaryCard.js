import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { HiBookmark, HiOutlineShare, HiStar, HiOutlineEye } from "react-icons/hi";

const NewsSummaryCard = ({ news }) => {
    const { title, author,
        total_view, thumbnail_url, _id, details, image_url, rating

    } = news;
    console.log(news);
    return (
        <Card className='mb-4'>
            <Card.Header className='d-flex justify-content-between align-item-center'>
                <div className='d-flex align-item-center'>
                    <Image
                        roundedCircle
                        src={author.img}
                        className='me-4'
                        style={{ height: '40px' }}
                    ></Image>
                    <div >
                        <p className='mb-0'>{author.name}</p>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <div>
                    <HiBookmark></HiBookmark>
                    <HiOutlineShare></HiOutlineShare>

                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length > 250 ?
                            <p>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read more</Link> </p>
                            : <p>{details}</p>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className='text-muted d-flex  justify-content-between'>
                <div>
                    <HiStar className='text-warning'></HiStar>
                    <span className='ms-2'>{rating.number}</span>
                </div>
                <div>
                    <span className='me-2'>
                        {total_view}
                    </span>
                    <HiOutlineEye></HiOutlineEye>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummaryCard;