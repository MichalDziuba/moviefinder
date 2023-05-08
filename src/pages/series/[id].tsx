import { Layout } from "@/components/Layout/layout";
import { Show } from "@/types/Series";
import axios from "axios";

import { GetServerSidePropsContext } from "next";
import Link from "next/link";
export default function TVShow(
  //   adult,
  //   backdrop_path,
  //   created_by,
  //   episode_run_time,
  //   first_air_date,
  //   genre_ids,
  //   homepage,
  //   id,
  //   in_production,
  //   languages,
  //   last_air_date,
  //   last_episode_to_air,
  //   name,
  //   networks,
  //   next_episode_to_air,
  //   number_of_episodes,
  //   number_of_seasons,
  //   origin_country,
  //   original_language,
  //   original_name,
  //   overview,
  //   popularity,
  //   poster_path,
  //   production_companies,
  //   production_countries,
  //   seasons,
  //   spoken_languages,
  //   status,
  //   tagline,
  //   type,
  //   vote_average,
  //   vote_count,
  data: Show
) {
  return (
    <Layout>
      <div className="flex-flex-col w-full h-fit items-center ">
        <div
          className={`flex flex-col  w-full h-[70vh] overflow-hidden justify-end items-center rounded-lg shadow-md shadow-secondary`}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="h-1/3 bg-primary bg-opacity-50 w-full">
            <h3>
              <Link href={"data.id"}>{data.name}</Link>
            </h3>
            <p>{data.number_of_seasons}</p>
            {/* <p>{formatTime(data.runtime)}</p> */}
          </div>
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
    const { status, data } = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.NEXT_PUBLIC_API}&language=en-US`
    );

    return {
      props: data,
    };
  } catch (error) {
    return {
      props: {
        requestFailed: true,
      },
    };
  }
};
