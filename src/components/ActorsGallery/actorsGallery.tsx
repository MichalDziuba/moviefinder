import { Person } from "@/types/Credits";
import { ActorThumbnail } from "../Thumbnails/actorThumbnail";
import { AiOutlineArrowRight } from 'react-icons/ai'
import Link from "next/link";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
type ActorsGalleryProps = {
    actors: Person[];
  id: number | null;

};
export const ActorsGallery = ({ actors,id }: ActorsGalleryProps) => {
  
  
  return (
    <div className=" flex flex-col  justify-center gap-2 overflow-hidden">
      <h3>Cast</h3>

      <ul className=" w-full flex overflow-auto gap-2 cast-gallery py-2">
        {actors.map((el) => {
          const {
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
          } = el;
          return (
            <ActorThumbnail
              adult={adult}
              credit_id={credit_id}
              gender={gender}
              id={id}
              known_for_department={known_for_department}
              name={name}
              original_name={original_name}
              popularity={popularity}
              profile_path={profile_path}
              cast_id={cast_id}
              character={character}
              key={id}
              department={department}
              job={job}
            />
          );
        })}
        <li className=" min-w-[9rem] h-72">
          <Link className=" flex justify-center items-center w-full h-full" href={`/movies/${id}/cast`}><p className="text-base font-semibold w-1/2">Zobacz więcej</p>
          <AiOutlineArrowRight /></Link>
          
        </li>
      </ul>
    </div>
  );
};
