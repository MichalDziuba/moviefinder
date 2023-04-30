import { Layout } from "@/components/layout"
import Link from "next/link";

const Page500 = () => {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center h-max pt-32 ">
          <h1 className="text-6xl font-bold text-primary">500</h1>
          <p className="text-2xl font-medium text-secondary">
            Server-side error occurred
          </p>
          <Link
            href="/"
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Go back home
          </Link>
        </div>
      </Layout>
    );
}
export default Page500