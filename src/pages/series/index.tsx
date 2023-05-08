import axios from "axios";

import { Layout } from "@/components/Layout/layout";
import Page500 from "../500";

import { TVShowDownloaded } from "@/types/Series";
import { TopSeries } from "@/components/TopContent/topSeries";
interface SeriesPageProps {
  data: TVShowDownloaded;
  requestFailed?: boolean;
}
export default function Series({ data, requestFailed }: SeriesPageProps) {

  if (requestFailed) {
    return <Page500 />;
  }
  return (
    <Layout>
      <TopSeries data={data} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  try {
    const { status, data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.NEXT_PUBLIC_API}&language=en-US`
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
