import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMovieInfo, MovieInfo } from "../components/movie_info";

export const Details = () => {
  const { id } = useParams<{ id?: string }>();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState({});

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovies(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="bg-gray-900 mx-auto h-screen w-full">
      <div className="h-full flex justify-center items-center">
        {loading ? (
          <div className="w-full h-screen flex justify-center items-center font-light">
            <span className="text-white text-6xl font-semibold">
              Loading...
            </span>
          </div>
        ) : (
          <MovieInfo
            title={(movies as IMovieInfo).title}
            year={(movies as IMovieInfo).year}
            rating={(movies as IMovieInfo).rating}
            runtime={(movies as IMovieInfo).runtime}
            medium_cover_image={(movies as IMovieInfo).medium_cover_image}
            torrents={(movies as IMovieInfo).torrents}
          />
        )}
      </div>
    </div>
  );
};
