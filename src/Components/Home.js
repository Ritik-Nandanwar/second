import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleItem from "./SingleItem/SingleItem";
import { BrowserRouter, Link } from "react-router-dom";
import Pagination from "./Pagination";

function Home() {
  let [page, setPage] = useState(1);

  const getData = async () => {
    let url = `https://api.themoviedb.org/3/trending/all/day?api_key=734c9d37368ab6ed430d8fbde3d0fd90&page=${page}`;
    let da = await axios.get(url);
    console.log(da.data.results);
    setMovies(da.data.results);
  };

  function incrementPage() {}
  useEffect(() => {
    getData();
  }, [page]);
  let [movies, setMovies] = useState([]);
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-12">
          {movies &&
            movies.map((item) => (
              <SingleItem
                title={item.title}
                poster={item.poster_path}
                vote_avg={item.vote_average}
                id={item.id}
                name={item.original_name}
                date={item.release_date}
                first_air_date={item.first_air_date}
                type={item.media_type}
              />
            ))}
        </div>
        <div>
          <div className="flex pagination-btn my-8">
            <a
              onClick={() => {
                if (page > 1) {
                  window.scrollTo(0, 0);
                  setPage((page -= 1));
                } else {
                  window.scrollTo(0, 0);
                  page = 1;
                }
                // setPage(if(page>1) ? page -= 1 : 1 );
                console.log(page);
              }}
              className="span px-4 cursor-pointer py-2 bg-gray-400 mx-4"
            >
              Previous
            </a>
            <a
              className="span px-4 py-2 cursor-pointer bg-purple-400 mx-4"
              onClick={() => {
                window.scrollTo(0, 0);
                setPage((page += 1));
                console.log(page);
              }}
            >
              Next
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
