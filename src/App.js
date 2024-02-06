import React, { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import Movies from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=5f230fc5";

function App() {
  const [myMov, setMyMov] = useState([]);
  const [searchMov, setSearchMov] = useState("");

  const dataFetch = async (tittle) => {
    const response = await fetch(`${API_URL}&s=${tittle}`);
    const data = await response.json();

    setMyMov(data.Search);
  };

  useEffect(() => {
    dataFetch("batman");
  }, []);

  return (
    <>
      <div className="app">
        <h1>Movies Lord</h1>
        <div className="search">
          <input
            type="text"
            value={searchMov}
            placeholder="Search movies"
            onChange={(e) => {
              setSearchMov(e.target.value);
            }}
            required
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={
              searchMov !== ""
                ? () => {
                    dataFetch(searchMov);
                  }
                : () => {
                    alert("field required!");
                  }
            }
          />
        </div>

        <div className="container">
          {myMov.map((movi) => (
            <Movies movi={movi} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
