import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleItem from "./SingleItem/SingleItem";

const SearchInput = ({ setMovies }) => {
  const [content, setContent] = useState([]);
  const [userInput, setUserInput] = useState("");
  let [page, setPage] = useState(1);
  const handleUserInput = async () => {
    let d = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=734c9d37368ab6ed430d8fbde3d0fd90&language=en-US&query=${userInput}&page=${page}&include_adult=false`
    );
    console.log(d.data);
    setContent(d.data.results);
    setMovies([]);
  };
  useEffect(() => {}, [userInput, page]);

  return (
    <>
      <div className="text-center ">
        <div class="pt-2 text-gray-600 mx-auto">
          <input
            class="border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
            onChange={(e) => {
              setUserInput(e.target.value);
              console.log(e.target.value);
            }}
          />
          <button
            type="submit"
            onClick={() => {
              handleUserInput();
            }}
            class=" right-0 ml-2 top-0 mt-5"
          >
            search
          </button>
        </div>
        <div className="container mx-auto my-8">
          <div className="grid grid-cols-4 gap-12">
            {content &&
              content.map((item) => (
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
          {content.length > 0 ? (
            <div>
              <div className="flex pagination-btn my-8 ">
                <a
                  onClick={() => {
                    if (page > 1) {
                      window.scrollTo(0, 0);
                      setPage((page -= 1));
                    } else {
                      window.scrollTo(0, 0);
                      page = 1;
                    }
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
          ) : null}
        </div>
      </div>
    </>
  );
};

export default SearchInput;
