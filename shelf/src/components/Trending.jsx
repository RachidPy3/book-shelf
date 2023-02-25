import React from "react";
import "./Trending.css";
import { useContext } from "react";
import { TrendingContext } from "../context/TrendingContext";

export const Trending = () => {
  const [...bookData] = useContext(TrendingContext);

  return (
    <div className="trending-container">
      <h3>Trending</h3>
      {bookData.map((book) => {
        return (
          <div>
            <h1>{book.title}</h1>
          </div>
        );
      })}
    </div>
  );
};
