/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import moment from 'moment';
import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
 import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
// import Rating from 'react-rating';
const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, total_view, rating } = news;
    return (
        <Card className=" mb-4">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
                <div className='ps-2 flex-grow-1'>
                    <p className='mb-0'>{author?.name}</p>
                    <p>{moment(author?.published_date).format('yyy-MM-D')} </p>
                </div>
                <div>
                    <FaRegBookmark></FaRegBookmark> <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 250 ? <>{details}</>
                        : <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read More</Link> </>}
                </Card.Text>

            </Card.Body>
            <Card.Footer className="text-muted d-flex align-items-center">
                <div className='d-flex flex-grow-1'>
                    <Rating style={{ maxWidth: 120 }} value={rating?.number} readOnly />
                    <span className='ps-2'>{rating?.number}</span>
                </div>
                <div>
                    <FaEye></FaEye> {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;