import { TopMovies } from "@/components/topMovies";
import { Layout } from "../components/layout";
import { useEffect } from "react";
import axios from "axios";
import Page500 from "./500";

export default function MoviesPage({ data, requestFailed }: any) {
    if (requestFailed) {
      return <Page500 />;
    }
  return (
    <Layout>
      <TopMovies data={data.results} />
    </Layout>
  );
}
export const getStaticProps = async () => {
  try {
    const { status, data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.NEXT_PUBLIC_API}&language=en-US`
    );

    return {
      props: { data },
    };
  } catch (error) {
    return {
      props: {
        requestFailed: true,
      },
    };
  }
};
