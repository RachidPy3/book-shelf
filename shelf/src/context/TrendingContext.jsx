import React from "react";
import { createContext, useEffect, useState } from "react";

export const TrendingContext = createContext(null);

export const TrendingProvider = () => {
  const [bookData, setBookData] = useState([]);
  const trendingUrl = "https://openlibrary.org/trending/daily.json";

  useEffect(() => {
    getBookData();
  }, []);

  function getBookData() {
    fetch(trendingUrl).then((res) => {
      console.log(res);
    });
  }
  return (
    <TrendingContext.Provider value={bookData}>
      {children}
    </TrendingContext.Provider>
  );
};
