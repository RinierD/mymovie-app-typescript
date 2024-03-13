// import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

interface MovieComponent {
  id: number;
  year: string;
  medium_cover_image: string;
  title: string;
  summary: string;
  genres: string[];
}

interface MovieComponentProps {
  movie: MovieComponent;
  setLoading: (newValue: boolean) => void;
  updateMovie: (newData: MovieComponent[]) => void;
}

export const MovieComponent: React.FC<MovieComponentProps> = ({
  movie,
  setLoading,
  updateMovie,
}) => {
  const containerRef = useRef<HTMLUListElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; // Adjust scroll speed here
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const getGenresData = async (genre: string) => {
    setLoading(true);

    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?genre=${genre}`)
    ).json();
    updateMovie(json.data.movies);
    setLoading(false);
  };

  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <div className="bg-gray-700 font-light xl:p-20 lg:p-5 md:p-10 sm:p-20 p-10 rounded-lg text-white flex flex-col gap-10">
        <img
          src={movie.medium_cover_image}
          alt={movie.title}
          className="w-full shadow-md"
        />
        <div>
          <h2 className="text-lg font-medium no-underline">
            <Link className="text-yellow-400 text-xl" to={`/movie/${movie.id}`}>
              {movie.title.length > 23
                ? `${movie.title.slice(0, 23)}...`
                : movie.title}
            </Link>
          </h2>
          <h3 className="mb-5 font-semibold">{movie.year}</h3>
          <p className="text-sm h-16">
            {movie.summary.length > 110
              ? `${movie.summary.slice(0, 110)}...`
              : movie.summary.length === 0
              ? "No Summary"
              : movie.summary}
          </p>
          <ul
            className="list-none p-0 flex mt-5 text-sm w-full overflow-x-hidden"
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            {movie.genres.map((g) => (
              <li
                key={g}
                className="p-1 m-1 border-2 rounded-2xl border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white duration-200 select-none"
                onClick={() => getGenresData(g)}
              >
                {g}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

//   Movie.propTypes = {
//     coverImg: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     summary: PropTypes.string.isRequired,
//     genres: PropTypes.arrayOf(PropTypes.string).isRequired,
//   };

export default MovieComponent;
