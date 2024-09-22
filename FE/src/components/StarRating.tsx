import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

const StarRating = ({ rating, otherClass = 'text-black text-sm', feedback = false }) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} style={{ color: '#FFD43B' }} />);
    }

    if (hasHalfStar) {
        stars.push(<FontAwesomeIcon key="half" icon={faStarHalfStroke} style={{ color: '#FFD43B' }} />);
    }

    return (
        <div>
            {stars}
            <span className={`px-2 ${otherClass} max-lg:hidden`}>{Math.floor(rating *12)}</span>
            {feedback && <span className={`px-2 ${otherClass}`}>đánh giá</span>}
        </div>
    );
};

export default StarRating;
