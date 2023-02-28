import "./App.css";
import { Navbar } from "./components/Navbar";
import { MainPage } from "./pages/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BookPage } from "./pages/BookPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:id" element={<BookPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
