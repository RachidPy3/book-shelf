import "./App.css";
import { Navbar } from "./components/Navbar";
import { MainPage } from "./pages/MainPage";

function App() {
  return (
    <div className="app">
      <Navbar />
      <MainPage />
    </div>
  );
}

export default App;
