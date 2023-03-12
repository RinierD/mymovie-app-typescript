import { useEffect, useState } from "react";
import { MovieComponent } from "../components/movie-component";
import styles from "./home.module.css";


export interface MovieComponent {
  id:number;
  year:string,
  medium_cover_image:string;
  title:string;
  summary:string;
  genres:string[];
}

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=2.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
      </div>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <MovieComponent
              key={(movie as MovieComponent).id}
              id={(movie as MovieComponent).id}
              year={(movie as MovieComponent).year}
              medium_cover_image={(movie as MovieComponent).medium_cover_image}
              title={(movie as MovieComponent).title}
              summary={(movie as MovieComponent).summary}
              genres={(movie as MovieComponent).genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;