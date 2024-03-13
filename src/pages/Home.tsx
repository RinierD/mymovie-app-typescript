import { useEffect, useState } from "react";
import { MovieComponent } from "../components/movie-component";

export interface MovieComponent {
  id: number;
  year: string;
  medium_cover_image: string;
  title: string;
  summary: string;
  genres: string[];
}

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<MovieComponent[]>([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=1.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  const updatedMovieData = (newValue: MovieComponent[]) => {
    setMovies(newValue);
  };

  const updatedLoading = (isLoading: boolean) => {
    setLoading(isLoading);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="bg-gray-900 mx-auto -full w-full">
      <div className="h-full flex justify-center">
        {loading ? (
          <div className="w-full h-screen flex justify-center items-center font-light">
            <span className="text-white text-6xl font-semibold">
              Loading...
            </span>
          </div>
        ) : (
          <div className="container my-12 mx-auto px-4 md:px-12">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
              {movies.map((movie) => (
                <MovieComponent
                  movie={movie}
                  setLoading={setLoading}
                  updateMovie={updatedMovieData}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Home;
