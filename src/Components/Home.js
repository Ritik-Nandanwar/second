import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleItem from "./SingleItem/SingleItem";
let url =
  "https://api.themoviedb.org/3/trending/all/day?api_key=734c9d37368ab6ed430d8fbde3d0fd90";

function Home() {
  const getData = async () => {
    let da = await axios.get(url);
    console.log(da.data.results);
    setMovies(da.data.results);
  };
  useEffect(() => {
    getData();
  }, []);
  const [movies, setMovies] = useState([]);
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
      </div>
    </>
  );
}

export default Home;
