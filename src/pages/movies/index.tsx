import { TopMovies } from "@/components/TopContent/topMovies";
import { Layout } from "../../components/Layout/layout";
import axios from "axios";
import Page500 from "../500";
import { MoviesDownloaded } from "@/types/Movie";
interface MoviesPageProps {
  data: MoviesDownloaded;

  requestFailed?: boolean;
}
export default function MoviesPage({ data, requestFailed }: MoviesPageProps) {
  console.log(data);
  if (requestFailed) {
    console.log(data);
    return <Page500 />;
  }
  return (
    <Layout>
      <TopMovies data={data} />
    </Layout>
  );
}
export const getStaticProps = async () => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.NEXT_PUBLIC_API}&language=en-US&vote_average.gt`
    );

    return {
      props: { data: data.results },
    };
  } catch (error) {
    return {
      props: {
        requestFailed: true,
      },
    };
  }
};
