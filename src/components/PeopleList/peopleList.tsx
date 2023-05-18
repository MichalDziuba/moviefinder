import { Person } from "@/types/Credits";
import { PersonThumbnail } from "../Thumbnails/personThumbnail";
type PeopleListProps = {
    title: string|undefined;
    people:Person[]
}
export const PeopleList = ({ title, people }: PeopleListProps) => {
  console.log(people)
    return (
      <>
            <h3 className="font-bold py-2">{ title}:</h3>
        <ul className="flex flex-col gap-y-2">
          {people?.map((person) => {
            return (
              <PersonThumbnail
                key={person.id}
                name={person.name}
                character={person.character}
                id={person.id}
                profile_path={person.profile_path}
              />
            );
          })}
        </ul>
      </>
    );
}