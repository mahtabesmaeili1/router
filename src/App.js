import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import DiscoverPage from "./pages/DiscoverPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import AllPokemons from "./components/AllPokemons";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/discover" element={<DiscoverPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:pokemon_name" element={<AllPokemons />} />
      </Routes>
    </div>
  );
}

export default App;
