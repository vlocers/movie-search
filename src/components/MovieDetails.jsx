import React from "react";

function MovieDetails({ movie }) {
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="overflow-hidden transition duration-300 transform rounded-lg shadow-md bg-zinc-900 hover:scale-105">
      {movie.poster_path ? (
        <img
          src={`${imageBaseUrl}${movie.poster_path}`}
          alt={movie.title}
          className="object-cover w-full h-80"
        />
      ) : (
        <div className="flex items-center justify-center w-full text-gray-400 bg-gray-700 h-80">
          Görsel yok
        </div>
      )}

      <div className="p-4">
        <h3 className="mb-2 text-lg font-semibold">{movie.title}</h3>
        <p className="text-sm text-gray-400">
          Yayın Tarihi: {movie.release_date || "Bilinmiyor"}
        </p>
        <p className="mt-1 text-sm text-yellow-500">
          Puan: {movie.vote_average || "?"}/10
        </p>
      </div>
    </div>
  );
}

export default MovieDetails;
