import axios from "axios";

import { Layout } from "@/components/Layout/layout";
import Page500 from "./500";
import { TopMovies } from "@/components/TopContent/topMovies";

export default function Series({ data, requestFailed }: any) {
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
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.NEXT_PUBLIC_API}&language=en-US`
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
