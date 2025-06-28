import { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Movies from "./components/Movies";
import axios from "axios";

function App() {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const getFilteredMovies = async (filmName) => {
    try{
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${filmName}&api_key=d6d4b4987a975418f0bf24858e4fb1cf`
      );
      setFilteredMovies(response.data.results);
    }
    catch (error) {
      console.error("Error fetching movies:", error);
    }
  }
  
  

  return (
    <div className="flex flex-col w-full min-h-screen text-white bg-gradient-to-r from-black via-zinc-800 to-black">
      <h1 className="pt-16 text-3xl font-semibold text-center">Movie</h1>
      <div className="container flex flex-col items-center justify-center gap-8 px-4 py-16 mx-auto">
        <Search getFilteredMovies={getFilteredMovies} filteredMovies={filteredMovies}/>
        <Movies filteredMovies={filteredMovies}/>
      </div>
    </div>
  );
}

export default App;
