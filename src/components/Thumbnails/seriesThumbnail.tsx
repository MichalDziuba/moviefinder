import Link from "next/link";
import Image from "next/image";
import { TVShow } from "@/types/Series";
export const SeriesThumbnail = ({
  backdrop_path,
  first_air_date,
  genre_ids,
  id,
  name,
  origin_country,
  original_language,
  original_name,
  overview,
  popularity,
  poster_path,
  vote_average,
  vote_count,
}: TVShow) => {
  return (
    <div className="w-72 h-auto flex flex-col justify-between items-center rounded-md border border-primary shadow-md hover:shadow-lg hover:shadow-primary shadow-primary hover:scale-105 transition-all">
      <Link href={`/series/${id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={`Image of ${name}`}
          width={288}
          height={440}
          priority
          className="rounded-md h-[430px]"
          style={{ objectFit: "cover" }}
        />
      </Link>
    </div>
  );
};
