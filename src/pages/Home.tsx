import { useEffect, useState } from "react";
import { MovieComponent } from "../components/movie-component";


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
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=1.8&sort_by=year`
      ) 
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="bg-gray-900 mx-auto -full w-full">
      <div className="h-full flex justify-center">
        {loading ? (
          <div className="w-full h-screen flex justify-center items-center font-light">
            <span className="text-white text-6xl font-semibold">Loading...</span>
        </div>
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 md:gap-20 lg:gap-32 px-10 md:px-20 lg:px-32 pt-20 md:pt-28 mx-auto ">
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
    </div>
  );
}
export default Home;