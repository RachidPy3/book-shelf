import React from "react";
import "./Trending.css";
import { useContext } from "react";

export const Trending = () => {
  let bookData = useContext();

  return (
    <div className="trending-container">
      <h3>Trending</h3>

      <div className="books-container">
        <div>
          <p>book</p>
        </div>
        <div>
          <p>book</p>
        </div>
        <div>
          <p>book</p>
        </div>
        <div>
          <p>book</p>
        </div>
        <div>
          <p>book</p>
        </div>
      </div>
    </div>
  );
};
