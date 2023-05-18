import { Person } from "@/types/Credits";
import Image from "next/image";
import Link from "next/link";
import { TeamMember } from "../TeamMember/teamMember";

export const PersonThumbnail = ({
  name,
  id,
  character,
  profile_path,
}: Partial<Person>) => {
  return (
    <li key={id}>
      <Link
        href={`/person/${id}`}
        className="w-72 h-24 text-base flex  items-center gap-4"
      >
        <div className="h-full w-16 relative overflow-hidden">
          <Image
            src={`${
              profile_path
                ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                : "/no-profile.png"
            }`}
            alt={`Image ${name}`}
            className="w-auto h-auto object-cover rounded-md"
            fill
            loading="lazy"
            sizes="100%"
          />
        </div>
        {name  && (
          <TeamMember name={name} role={character}  />
        )}
        
      </Link>
    </li>
  );
};
