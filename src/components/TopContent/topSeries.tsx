import { TVShowDownloaded } from "@/types/Series";
import { SeriesThumbnail } from "../Thumbnails/seriesThumbnail";
interface TopSeriesProps {
  data: TVShowDownloaded;
}
export const TopSeries = ({ data }: TopSeriesProps) => {
  return (
    <div className="w-full h-max flex flex-col items-center ">
      <h2 className="text-3xl h-fit w-fit ">Top Rated Movies! </h2>

      <ul className="grid place-items-center gap-10 h-fit grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5">
        {data.map((el, idx: number) => {
          return (
            <li key={idx}>
              <SeriesThumbnail
                id={el.id}
                first_air_date={el.first_air_date}
                name={el.name}
                origin_country={el.origin_country}
                original_name={el.original_name}
                backdrop_path={el.backdrop_path}
                genre_ids={el.genre_ids}
                original_language={el.original_language}
                overview={el.overview}
                popularity={el.popularity}
                poster_path={el.poster_path}
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
