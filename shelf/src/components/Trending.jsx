import React from "react";
import "./Trending.css";
import { useContext } from "react";
import { TrendingContext } from "../context/TrendingContext";
import { createSearchParams, useNavigate } from "react-router-dom";

export const Trending = () => {
  const [...bookData] = useContext(TrendingContext);
  const navigate = useNavigate();

  function bookPage(id, img) {
    navigate({
      pathname: `${id}`,
      search: createSearchParams({
        ImageId: img,
        bookId: id,
      }).toString(),
    });
  }

  return (
    <div>
      <h3>Trending Books:</h3>
      <div className="trending-container">
        {bookData.map((book) => {
          return book.cover_i ? (
            <div
              key={book.key}
              onClick={() => {
                bookPage(book.key, book.cover_i);
              }}
            >
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt="book-cover"
              />
            </div>
          ) : (
            <div
              className="empty-book"
              key={book.key}
              onClick={() => {
                bookPage(book.key, book.cover_i);
              }}
            >
              <p>{book.title}</p>
              <p>by: {book.author_name[0]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
