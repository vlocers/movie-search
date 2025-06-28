import React from "react";
import MovieDetails from "./MovieDetails";

function Movies({ filteredMovies }) {
  return (
    <div className="w-full">
      <h2 className="mb-4 text-2xl font-semibold">Filmler</h2>

      {filteredMovies.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredMovies.map((movie) => (
            <MovieDetails key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400">Film bulunamadı.</p>
      )}
    </div>
  );
}

export default Movies;
