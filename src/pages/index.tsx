

import { Layout } from "@/components/layout";
import Page500 from "./500";


export default function Home({ data, requestFailed }: any) {

  if (requestFailed) {
    return <Page500 />;
  }
  return (
    <Layout>
      <div className="text-2xl subpixel-antialiased italic">
        <h2 className="text-3xl p-4">Welcome to MovieFinder,</h2>
        <p className="tracking-wide py-3 ">
          the ultimate website for movie lovers! Whether you are looking for the
          latest releases, the most popular classics, or the best series, you
          can find them all here with our powerful search engine. Just type in
          the name of the movie, actor, or series you are interested in and get
          instant results. You can also browse through different genres,
          ratings, and reviews to discover new titles and recommendations. But
          that’s not all. By creating an account and logging in, you can also
          access exclusive features such as saving your favorites, creating your
          own watchlists, rating and reviewing movies and series, and joining
          our community of movie fans. You can also get personalized suggestions
          based on your preferences and watch history. So what are you waiting
          for? Join moviefinder today and enjoy the best of cinema at your
          fingertips!
        </p>
      </div>
    </Layout>
  );
}
