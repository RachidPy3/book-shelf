import { Hero } from "../components/Hero";
import { Trending } from "../components/Trending";
import { TrendingProvider } from "../context/TrendingContext";

export const MainPage = () => {
  return (
    <div>
      <TrendingProvider>
        <Hero />
        <Trending />
      </TrendingProvider>
    </div>
  );
};
