import React from "react";
import { Link } from "react-router-dom";

const Pagination = () => {
  return (
    <div>
      <div className="flex pagination-btn my-8">
        <Link to="/about" className="span px-4 py-2 bg-gray-400 mx-4">
          Previous
        </Link>
        <a className="span px-4 py-2 bg-purple-400 mx-4">Next</a>
      </div>
    </div>
  );
};

export default Pagination;
