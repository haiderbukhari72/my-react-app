import React from "react";
import "./App.css";

const Movies = ({ movi }) => {
  return (
    <div>
      <div className="movie">
        <div>
          <p>{movi.Year}</p>
        </div>
        <div>
          <img
            src={
              movi.Poster !== "NA"
                ? movi.Poster
                : "https://via.placeholder.com/400"
            }
            alt={movi.Title}
          />
        </div>
        <div>
          <span>{movi.Type}</span>
          <h3>{movi.Title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Movies;
