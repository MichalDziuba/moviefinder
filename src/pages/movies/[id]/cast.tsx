import { CreditsProps, Person } from "@/types/Credits";
import { Layout } from "../../../components/Layout/layout";
import axios from "axios";
import Image from "next/image";
import { GetServerSidePropsContext } from "next";
import { useEffect, useState } from "react";
import { PeopleList } from "@/components/PeopleList/peopleList";
import { nanoid } from "nanoid";
import { getYear } from "@/utils/helpers";
import { ButtonBack } from "@/components/ButtonBack/buttonBack";
type CastPageProps = {
  title: string;
  releaseDate:string,
  image: string;
  creditsData: CreditsProps;
};
export default function CastPage({ title, image,releaseDate, creditsData }: CastPageProps) {
  console.log(title, image, creditsData);
  const [actorsAll, setActors] = useState<null | Person[]>(null);
  const [crewDepartments, setCrewDepartments] = useState<
    null | { departmentName: string | undefined; people: Person[] }[]
  >(null);

  useEffect(() => {
    const departments = [
      ...new Set(creditsData?.crew.map((person) => person.department)),
    ];
    const groupedPeople = departments.map((department) => {
      return {
        departmentName: department,
        people: creditsData.crew.filter(
          (person, idx, self) =>
            person.department === department &&
            self.findIndex((p) => p.id === person.id) === idx
        ),
      };
    });
    if (groupedPeople.length > 0) {
      setCrewDepartments(groupedPeople);
    }
    setActors(creditsData.cast);
  }, [creditsData]);

  return (
    <Layout>
      <div className="py-2">
        <Image src={`https://image.tmdb.org/t/p/original/${image}`} loading="lazy" alt={title} width={120}height={200} className="rounded-md"/>
        <p className="text-lg font-semibold">{title}{" "}({getYear(releaseDate)})</p>
        <ButtonBack/>
      </div>
      <div className="w-full flex flex-col justify-center items-center sm:flex-row sm:justify-around sm:items-stretch">
        <div>{actorsAll && <PeopleList people={actorsAll} title="Cast" />}</div>
        <div>
          {crewDepartments &&
            crewDepartments.map((el) => {
              return (
                <PeopleList
                  people={el.people}
                  title={el.departmentName}
                  key={nanoid()}
                />
              );
            })}
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { id } = context.params as { id: string };

  try {
    const movieData = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API}&language=en-US`
    );
    const creditsData = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.NEXT_PUBLIC_API}&language=en-US`
    );
    const movieTitle = movieData.data.title;
    const movieImage = movieData.data.poster_path;
    const movieReleaseDate=movieData.data.release_date
    const data = {
      title: `${movieTitle}(${movieReleaseDate})`,
      image: movieImage,
      
      data: creditsData.data,
    };
    return {
      props: {
        title: movieTitle,
        releaseDate:movieReleaseDate,
        image: movieImage,
        creditsData: creditsData.data,
      },
    };
  } catch (error) {
    return {
      props: {
        requestFailed: true,
      },
    };
  }
};
