import { Layout } from "@/components/Layout/layout";
import { MovieData } from "@/types/Movie";
import Link from "next/link";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import { CreditsProps, Person } from "@/types/Credits";
import { ReviewsProps } from "@/types/Reviews";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ActorsGallery } from "@/components/ActorsGallery/actorsGallery";
import { formatTime, getYear } from "@/utils/helpers";
import { TeamMember } from "@/components/TeamMember/teamMember";
import { nanoid } from "nanoid";

interface MovieProps {
  movieData: MovieData;
  creditsData: CreditsProps;
  reviewsData: ReviewsProps;
}
export default function Movie({
  movieData,
  creditsData,
}: // reviewsData,
MovieProps) {



  const [director, setDirector] = useState<string | null>(null);
  const [writersNames, setWritersNames] = useState<string[] | null>(null);
  const [topCast, setTopCast] = useState<Person[] | null>(null);
  const [movieID, setMovieID] = useState<number|null>(null);
  useEffect(() => {
    setMovieID(movieData.id)
    const directorName = creditsData.crew
      .filter((el) => el.job === "Director")
      .map((el) => el.name)
      .toString();
    const writers = creditsData.crew
      .filter((el) => el.job === "Writer")
      .map((el) => el.name);
    setDirector(directorName);
    setWritersNames(writers);
    if (creditsData.cast.length === 0) {
      setTopCast(null);
    } else if (creditsData.cast.length > 10) {
      const top10Cast = creditsData.cast.slice(0, 10);
      setTopCast(top10Cast);
    } else {
      setTopCast(creditsData.cast);
    }
  }, [creditsData,movieData]);

  return (
    <Layout>
      <div className="flex-flex-col w-full h-fit items-center ">
        <div
          className={`flex flex-col  w-full h-[70vh] overflow-hidden justify-end items-center rounded-lg shadow-md shadow-secondary`}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${
              movieData.backdrop_path || movieData.poster_path
            })`,
            backgroundPosition: "top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="min-h-1/3 max-h-fit gap-1 bg-primary bg-opacity-70 w-full flex flex-col justify-around pl-2">
            <Link href={movieData.homepage}>
              <h3 className=" text-2xl font-bold italic">
                {movieData.title}
                <span className="font-normal">
                  ({getYear(movieData.release_date)})
                </span>
              </h3>
            </Link>
            <p className="italic text-sm ">{movieData.tagline}</p>
            <ul className="flex text-base gap-1 ">
              {movieData.genres.map((el, id) => {
                return <li key={id}>{el.name}</li>;
              })}
            </ul>
            <p className=" italic text-base">{formatTime(movieData.runtime)}</p>

            <p className=" text-base">
              Users rating: {Math.ceil(movieData.vote_average * 10)}%
            </p>
          </div>
        </div>
        <div className="mt-2">
          <div className="font-base italic text-base py-4">
            <p>{movieData.overview}</p>
          </div>
          <div className="flex items-center gap-4 py-2">
            
            {director && (     
              <TeamMember name={director} role="director" />
            )}
            {writersNames && (
              <ul>
                {writersNames.map((el, id) => {
                  return (
                    <li key={id}>
                      <TeamMember  key={id} name={el} role="writer" />
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {topCast && <ActorsGallery actors={topCast} id={movieID} />}
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
    // const reviewsData = await axios.get(
    //   `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.NEXT_PUBLIC_API}&language=en-US`
    // );
    return {
      props: {
        movieData: movieData.data,
        creditsData: creditsData.data,
        // reviewsData: reviewsData.data.results,
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
