import { Layout } from "@/components/Layout/layout";
import Link from "next/link";

const Page404 = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen ">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="text-2xl font-medium text-gray-600">Page not found</p>
        <Link
          href="/"
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Go back home
        </Link>
      </div>
    </Layout>
  );
};
export default Page404;
