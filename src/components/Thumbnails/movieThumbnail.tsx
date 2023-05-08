import { MovieData, MovieInterface } from "@/types/Movie";
import Image from "next/image";
import Link from "next/link";
export const MovieThumbnail = ({
  adult,
  backdrop_path,
  genre_ids,
  id,
  media_type,
  original_language,
  overview,
  popularity,
  poster_path,
  release_date,
  title,
  video,
  vote_average,
  vote_count,
}: MovieInterface) => {
  return (
    <div className="w-72 h-auto flex flex-col justify-between items-center rounded-md border border-secondary shadow-md hover:shadow-lg hover:shadow-secondary shadow-secondary hover:scale-105 transition-all">
      <Link href={`/movies/${id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={`Image of ${title}`}
          width={288}
          height={440}
          // priority
          loading="lazy"
          className="rounded-md"
          style={{ objectFit: "cover" }}
        />
      </Link>
    </div>
  );
};
