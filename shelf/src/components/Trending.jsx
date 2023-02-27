import React from "react";
import "./Trending.css";
import { useContext } from "react";
import { TrendingContext } from "../context/TrendingContext";

export const Trending = () => {
  const [...bookData] = useContext(TrendingContext);
  console.log(bookData);

  return (
    <div>
      <h3>Trending Books:</h3>
      <div className="trending-container">
        {bookData.map((book) => {
          return (
            <div>
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt="book-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
