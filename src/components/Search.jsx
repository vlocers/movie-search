import React, { useState, useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";

function Search({ getFilteredMovies, filteredMovies }) {
  const [filmName, setFilmName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const newFilteredMovies = filteredMovies.slice(0, 5);

  useEffect(() => {
    if (filmName.trim().length > 1) {
      getFilteredMovies(filmName);
      setIsOpen(true);
    } else {
      getFilteredMovies("");
      setIsOpen(false);
    }
  }, [filmName]);

  // Dış tıklamayı yakala
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const clear = () => {
    setFilmName("");
    getFilteredMovies("");
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative flex w-full max-w-md mx-auto ">
      <input
        type="text"
        className="w-full px-4 py-2 text-black border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
        placeholder="Film adı yaz..."
        onChange={(e) => setFilmName(e.target.value)}
        value={filmName}
        onFocus={() => filmName.length > 1 && setIsOpen(true)} // input focus olunca aç
      />
      {filmName && (
        <AiOutlineClose
          className="absolute text-xl text-black cursor-pointer right-2 top-1/3"
          onClick={clear}
        />
      )}

      <div
        className={`absolute z-10 w-full mt-12 bg-white rounded shadow-lg max-h-80 overflow-y-auto ${
          isOpen ? "" : "hidden"
        }`}
      >
        <ul>
          {newFilteredMovies.map((movie) => (
            <li
              key={movie.id}
              className="px-4 py-2 text-black cursor-pointer hover:bg-gray-100"
            >
              {movie.title}
            </li>
          ))}
        
        </ul>
      </div>
    </div>
  );
}

export default Search;
