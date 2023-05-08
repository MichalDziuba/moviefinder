import { Person } from "@/types/Credits";
import Image from "next/image";
import Link from "next/link";

export const ActorThumbnail = ({
  adult,
  credit_id,
  gender,
  id,
  known_for_department,
  name,
  original_name,
  popularity,
  profile_path,
  cast_id,
  character,
  department,
  job,
}: Person) => {
  return (
    <li className=" border-2 border-secondary rounded-md relative overflow-hidden w-36 h-72 min-w-[9rem] ">
      <Link href="/cast/id" className="w-full h-full">
        <Image
          src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
          alt={`Image ${name}`}
          className="w-full h-3/5 object-cover"
          width={70}
          height={70}
          loading="lazy"
        />
      </Link>
      <div className=" text-base flex flex-col h-2/5 py-1 px-2">
        <p className="font-semibold">{name}</p>
        <p className="pt-2 italic">{character}</p>
      </div>
    </li>
  );
};
    