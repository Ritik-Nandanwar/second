import React from "react";
import "./SingleItem.css";
const SingleItem = ({
  title,
  date,
  id,
  vote_avg,
  first_air_date,
  poster,
  name,
  type,
}) => {
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
      <div className=" single-item-footer">
        <span className="ml-2 font-bold py-2 text-stone-700">
          {date ? date : first_air_date}
        </span>
        <span className="mr-2 font-bold py-2 text-stone-700">{type}</span>
      </div>
    </div>
  );
};

export default SingleItem;
