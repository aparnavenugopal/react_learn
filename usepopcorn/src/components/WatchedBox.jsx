import React, { useState } from "react";
import { tempWatchedData } from "../App";
import MovieList from "./MovieList";
import WatchedSummary from "./WatchedSummary";

export const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const WatchedBox = () => {
  const [isOpen2, setIsOpen2] = useState(true);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
        <WatchedSummary watched={watched}/>
        <MovieList watched={watched}/>
        </>
      )}
    </div>
  );
};

export default WatchedBox;