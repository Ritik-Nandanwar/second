import React from "react";
import "./SingleItem.css";
const SingleItem = ({ title, id, vote_avg, poster, name }) => {
  return (
    <div className="bg-purple-300 rounded-md">
      <div className="text-center font-bold text-xl py-1">
        {title ? title : name}
      </div>
      <img
        className="container cursor-pointer hover:from-violet-400 rounded-md single-img"
        width="400"
        src={`https://image.tmdb.org/t/p/w500/${poster}`}
        alt=""
      />
    </div>
  );
};

export default SingleItem;
