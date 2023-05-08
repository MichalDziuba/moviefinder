import { MovieData, MovieInterface, MoviesDownloaded } from "@/types/Movie";
import { MovieThumbnail } from "../Thumbnails/movieThumbnail";
import axios from "axios";
interface TopMoviesProps {
  data: MoviesDownloaded;
}
export const TopMovies = ({ data }: TopMoviesProps) => {
  return (
    <div className="w-full h-max flex flex-col items-center ">
      <h2 className="text-3xl h-fit w-fit ">Top Rated Movies! </h2>

      <ul className="grid place-items-center gap-10 h-fit grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5">
        {data.map((el, idx: number) => {
          return (
            <li key={idx}>
              <MovieThumbnail
                id={el.id}
                adult={el.adult}
                backdrop_path={el.backdrop_path}
                genre_ids={el.genre_ids}
                media_type={el.media_type}
                original_title={el.original_title}
                original_language={el.original_language}
                overview={el.overview}
                popularity={el.popularity}
                poster_path={el.poster_path}
                release_date={el.release_date}
                title={el.title}
                video={el.video}
                vote_average={el.vote_average}
                vote_count={el.vote_count}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
