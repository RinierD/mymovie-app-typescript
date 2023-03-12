import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./movie.module.css";

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
      <div className={styles.movie}>
        <img src={medium_cover_image} alt={title } className={styles.movie__img} />
          <div>
            <h2 className={styles.movie__title}>
              <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <h3 className={styles.movie__year}>{year}</h3>
              <p className={styles.movie__body}>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
            <ul className={styles.movie__genres}>
              {genres.map((g) => (
                <li key={g}>{g}</li>
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
