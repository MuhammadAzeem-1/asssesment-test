import React from "react";
import { FaStar } from "react-icons/fa";
import { LiaStar } from "react-icons/lia";

const StarRating = ({ rating }) => {
  const maxStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const stars = Array.from({ length: maxStars }, (_, index) => {
    if (index < fullStars) {
      return (
        <i key={index} className="fas fa-star">
          <FaStar size={15} />
        </i>
      ); // Full star
    } else {
      return (
        <i key={index} className="far fa-star">
          <LiaStar size={15} />
        </i>
      ); // Empty star
    }
  });

  return <div className="flex">{stars}</div>;
};

export default StarRating;
