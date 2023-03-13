// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

interface MovieComponent {
  id:number;
  year:string;
  medium_cover_image:string;
  title:string;
  summary:string;
  genres:string[];
}

export const MovieComponent: React.FC<MovieComponent> = ({
  id,
  year,
  medium_cover_image,
  title,
  summary,
  genres,

}) => {
return (
      <div className="bg-gray-700 mb-70 font-light xl:p-20 lg:p-5 md:p-10 sm:p-20 p-10 rounded-lg text-white grid grid-cols-[minmax(150px,1fr) 2fr] gap-10">
        <img src={medium_cover_image} alt={title} className="w-full shadow-md" />
          <div>
            <h2 className="text-lg font-medium no-underline">
              <Link className="text-yellow-400 text-xl" to={`/movie/${id}`}>{title}</Link>
            </h2>
            <h3 className="mb-5 font-semibold">{year}</h3>
              <p className="text-sm">{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
            <ul className="list-none p-0 flex flex-wrap mt-5 text-sm">
              {genres.map((g) => (
                <li className="p-1 m-1 border-2 rounded-2xl border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white duration-200" key={g}>{g}</li>
              ))}
            </ul>
          </div>
      </div>
    );
  }
  
//   Movie.propTypes = {
//     coverImg: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     summary: PropTypes.string.isRequired,
//     genres: PropTypes.arrayOf(PropTypes.string).isRequired,
//   };
  
  export default MovieComponent;
