import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const TrendingContext = createContext({});

export const TrendingProvider = ({ children }) => {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    getBookData();
  }, []);

  function getBookData() {
    axios
      .get("https://openlibrary.org/trending/daily.json")
      .then((res) => setBookData(res.data.works));
  }
  return (
    <TrendingContext.Provider value={bookData}>
      {children}
    </TrendingContext.Provider>
  );
};
