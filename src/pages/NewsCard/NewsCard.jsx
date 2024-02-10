import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, } from 'react-icons/fa6';
import { FaShareAlt, FaRegStar, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, total_view, rating } = news;
    return (

        <Card className=" mb-4">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
                <div className='ps-2 flex-grow-1'>
                    <p className='mb-0'>{author?.name}</p>
                    <p className='mb-0'><small>{moment(author?.published_date).format('MMMM Do YYYY')}</small></p>
                </div>
                <div>
                    <FaRegBookmark></FaRegBookmark> <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img className='mb-1' variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 250 ? <>{details}</> : <> {details.substr(0, 250) + '...'}
                        <Link to={`/news/${_id}`}>Read More</Link>
                    </>}
                </Card.Text>

            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1'>
                    <Rating
                        placeholderRating={rating?.number}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                        className='text-warning'
                    >
                    </Rating>
                    <span className='ps-1'>{rating?.number}</span>
                </div>
                <div>
                    <FaEye></FaEye> {total_view}
                </div>
            </Card.Footer>
        </Card>

    );
};

export default NewsCard;